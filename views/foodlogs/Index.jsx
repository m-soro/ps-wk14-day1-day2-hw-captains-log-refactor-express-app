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
                <a href={`/foodlogs/${log._id}`}>
                  <h3>{log.name}</h3>
                </a>
              </div>
              <div className="time-stamps">
                <p>{moment(log.createdAt, "MM/DD/YY").format("MM/DD/YY")}</p>
                <p>{moment(log.createdAt, "h:mm a").format("h:mm a")}</p>
              </div>
            </header>
          </article>
        );
      })}
    </DefaultLayout>
  );
}
