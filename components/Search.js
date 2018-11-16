import React, { Component } from "react";
import styled from "styled-components";
import { API_KEY } from "../config";
import axios from "axios";

import MovieList from "./MovieList";

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
        <MoviesContainer>
          <MovieList movieList={data} />
        </MoviesContainer>
      </>
    );
  }
}

const MoviesContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

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
  color: ${props => props.theme.secondaryColor};
  font-size: 1.25rem;
  font-weight: bold;
  &:focus {
    outline: 0;
  }
`;
