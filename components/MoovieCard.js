import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  grid-template-rows: 1fr 1fr;
  display: grid;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const CardTitle = styled.h3`
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const Caption = styled.div`
  align-self: end;
`;

export default class MoovieCard extends Component {
  render() {
    return (
      <Card
        style={{
          backgroundImage: `linear-gradient(to top, rgba(40, 42, 54, 1), rgba(255, 255, 255, 0)), url(${
            this.props.cover
          })`
        }}
      >
        <CardTitle>{this.props.title}</CardTitle>
        <Caption>
          <div>⭐ {this.props.vote}</div>
          <div>🗓 {this.props.date}</div>
        </Caption>
      </Card>
    );
  }
}
