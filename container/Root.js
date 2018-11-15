import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Search from "../components/Search";
import { theme } from "../themes/Colors";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
    padding: 1rem;
  }
`;

const Container = styled.div`
  text-transform: capitalize;
  text-align: right;
  &:hover {
    cursor: pointer;
  }
`;

export default class Root extends Component {
  state = {
    theme: theme.dark,
    mode: "dark"
  };

  _handleThemeChange = () => {
    if (this.state.mode === "dark") {
      return this.setState({ theme: theme.dark, mode: "light" });
    }
    this.setState({ theme: theme.light, mode: "dark" });
  };

  componentDidMount() {
    // Can't put this in the constructor(), use it with caution
    this.setState({ theme: theme.dark, mode: "light" });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <Container onClick={this._handleThemeChange}>
            {this.state.mode} mode
          </Container>
          <GlobalStyle />
          <Search />
        </>
      </ThemeProvider>
    );
  }
}
