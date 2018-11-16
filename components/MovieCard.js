import React, { Component } from "react";
import styled from "styled-components";

export default class MoovieCard extends Component {
  render() {
    return (
      <Card
        style={{
          backgroundImage: `linear-gradient(to top, rgba(40, 42, 54, 1), rgba(0, 0, 0, 0.2)), url(${
            this.props.cover
          })`
        }}
      >
        <Caption>
          <div>⭐ {this.props.vote}</div>
          <Date>🗓 {this.props.date}</Date>
        </Caption>
        <CardTitle>{this.props.title}</CardTitle>
      </Card>
    );
  }
}

const Card = styled.div`
  border: 3px solid ${props => props.theme.borderColor};
  border-radius: 0.5rem;
  background-repeat: no-repeat;
  background-size: cover;
  grid-template-rows: 1fr 1fr;
  display: grid;
  padding: 1rem;

  width: 100%;
  height: 160px;
  @media (min-width: 550px) {
    height: 250px;
  }
`;

const CardTitle = styled.h3`
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  margin: 0;
  align-self: end;
`;

const Caption = styled.div`
  align-self: start;
  grid-template-columns: 1fr 1fr;
  display: grid;
  font-size: 0.75rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const Date = styled.div`
  text-align: right;
`;
