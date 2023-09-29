import React from "react";

class DefaultLayout extends React.Component {
  render() {
    return (
      <html data-theme="dark">
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" type="text/css" href="/styles.css" />
          <link rel="stylesheet" type="text/css" href="/pico.min.css" />
        </head>
        <body className="container">
          <h1>{this.props.title}</h1>
          <nav>
            <nav aria-label="breadcrumb">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/logs/index"> View Logs</a>
                </li>
                <li>
                  <a href="/logs/new"> New Entry</a>
                </li>
              </ul>
            </nav>
            <nav aria-label="breadcrumb">
              <ul>
                <li>
                  <a href="/foodlogs/index"> View Food Logs</a>
                </li>
                <li>
                  <a href="/foodlogs/new"> New Food Log Entry</a>
                </li>
              </ul>
            </nav>
          </nav>

          <h1>{this.props.title}</h1>

          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
