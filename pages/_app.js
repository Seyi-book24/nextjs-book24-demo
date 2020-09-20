import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be access by the client
    return { pageProps: pageProps };
  }

  componentDidMount() {}

  render() {
    //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Head>
        <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <link
            rel="shortcut icon"
            href="images/favicon.ico"
            type="images/x-icon"
          />
          <link
            rel="apple-touch-icon"
            type="images/x-icon"
            href="images/apple-touch-icon-57x57-precomposed.png"
          />
          <link
            rel="apple-touch-icon"
            type="images/x-icon"
            sizes="72x72"
            href="images/apple-touch-icon-72x72-precomposed.png"
          />
          <link
            rel="apple-touch-icon"
            type="images/x-icon"
            sizes="114x114"
            href="images/apple-touch-icon-114x114-precomposed.png"
          />
          <link
            rel="apple-touch-icon"
            type="images/x-icon"
            sizes="144x144"
            href="images/apple-touch-icon-144x144-precomposed.png"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
          <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
