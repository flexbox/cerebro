import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import MoovieCard from "./MoovieCard";
import { API_KEY } from "../config";

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

const Prompt = styled.div`
  color: ${props => props.theme.ternaryColor};
  font-size: 2rem;
`;
const Pwd = styled.h1`
  color: ${props => props.theme.primaryColor};
  margin-bottom: 0;
  font-size: 20px;
`;

export default class Root extends Component {
  state = {
    loading: false,
    query: "titanic",
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
          />
        </Form>
        {data.map((item, key) => (
          <MoovieCard
            key={item.id}
            title={item.title}
            vote={item.vote_average}
            date={item.release_date.substr(0, 4)}
            cover={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
              item.poster_path
            }`}
          />
        ))}
      </>
    );
  }
}
