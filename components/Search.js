import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieCard from "./MovieCard";
import { API_KEY } from "../config";

const Pwd = styled.h1`
  color: ${props => props.theme.primaryColor};
  margin-bottom: 0;
  font-size: 20px;
`;

const Prompt = styled.div`
  color: ${props => props.theme.ternaryColor};
  font-size: 2rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 15px 1fr;
`;

const Input = styled.input`
  background-color: transparent;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 0;
  margin-left: 0.5rem;
  color: ${props => props.theme.textColor};
  &:focus {
    outline: 0;
  }
`;

const MoovieList = styled.div`
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = {
    loading: false,
    query: "",
    data: [],
    errorMessage: ""
  };

  _fetch = () => {
    let { query } = this.state;

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      )
      .then(response =>
        this.setState({
          loading: false,
          data: response.data.results
        })
      )
      .catch(error =>
        this.setState({
          loading: false,
          errorMessage: error.message
        })
      );
  };

  _handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    this._fetch();
  };

  render() {
    let { loading, query, data, errorMessage } = this.state;

    if (loading) {
      return <div>Loading…</div>;
    }

    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }

    return (
      <>
        <Pwd>~/cerebro/search</Pwd>
        <Form onSubmit={this._handleSubmit}>
          <Prompt>❯</Prompt>
          <Input
            type="search"
            value={query}
            onChange={event => this.setState({ query: event.target.value })}
            required
            ref={this.inputRef}
            onMouseEnter={() => {
              this.inputRef.current.focus();
            }}
          />
        </Form>
        <MoovieList>
          {data.map((item, key) => (
            <MovieCard
              key={item.id}
              title={item.title}
              vote={item.vote_average}
              date={item.release_date.substr(0, 4)}
              cover={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
                item.poster_path
              }`}
            />
          ))}
        </MoovieList>
      </>
    );
  }
}
