import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import MoovieCard from "./MoovieCard";
import { API_KEY } from "../config";

const Form = styled.form`
  border: 1px solid ${props => props.theme.borderColor};
`;

const Input = styled.input`
  border: 1px solid ${props => props.theme.borderColor};
`;

export default class Root extends Component {
  state = {
    loading: true,
    data: [],
    errorMessage: ""
  };

  _fetch = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=9d1a64594eda271aecb60848faf671ba&query=venom"
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

  componentDidMount = () => {
    this._fetch();
  };

  render() {
    let { loading, errorMessage, data } = this.state;

    if (loading) {
      return <div>Loading…</div>;
    }

    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }

    return (
      <div>
        <Form onSubmit={this.signUp}>
          <span>❯</span>
          <Input type="search" name="search" />
        </Form>
        {data.map(item => (
          <MoovieCard
            title={item.title}
            vote={item.vote_average}
            date={item.release_date.substr(0, 4)}
            cover={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
              item.poster_path
            }`}
          />
        ))}
      </div>
    );
  }
}
