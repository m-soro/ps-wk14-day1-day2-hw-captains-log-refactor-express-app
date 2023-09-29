import React from "react";
import moment from "moment";
import DefaultLayout from "../layouts/Default.jsx";

export default function Index({ logs }) {
  return (
    <DefaultLayout>
      <div>
        <h1>Log Entries</h1>
      </div>
      {logs.map((log, index) => {
        return (
          <article key={index}>
            <header className="article-header">
              <div>
                <a href={`/logs/${log._id}`}>
                  <h3>{log.title}</h3>
                </a>
                <p>{log.author}</p>
              </div>
              <div className="time-stamps">
                <p>{moment(log.createdAt, "MM/DD/YY").format("MM/DD/YY")}</p>
                <p>{moment(log.createdAt, "h:mm a").format("h:mm a")}</p>
              </div>
            </header>
            <body className="article-body">
              <p className="snippet-text">{log.entry.substring(0, 80)} ...</p>
            </body>
          </article>
        );
      })}
    </DefaultLayout>
  );
}
