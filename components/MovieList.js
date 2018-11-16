import React, { Component } from "react";
import styled from "styled-components";

import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  render() {
    return (
      <MovieGrid>
        {this.props.movieList.map(item => (
          <MovieCard
            key={item.id}
            id={item.id}
            title={item.title}
            vote={item.vote_average}
            date={item.release_date.substr(0, 4)}
            cover={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
              item.poster_path
            }`}
          />
        ))}
      </MovieGrid>
    );
  }
}

const MovieGrid = styled.div`
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
