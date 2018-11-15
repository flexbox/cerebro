import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Search from "../components/Search";
import { theme } from "../themes/Colors";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
    padding: 1rem;
  }
`;

export default class Style extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Search />
        </>
      </ThemeProvider>
    );
  }
}
