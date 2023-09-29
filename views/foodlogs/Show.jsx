import React from "react";
import moment from "moment";
import DefaultLayout from "../layouts/Default.jsx";

export default function Show({ log }) {
  return (
    <DefaultLayout>
      <article>
        <div className="article-header">
          <div>
            <h2>{log.name}</h2>
          </div>
          <div className="time-stamps">
            <p>{moment(log.createdAt, "MM/DD/YY").format("MM/DD/YY")}</p>
            <p>{moment(log.createdAt, "h:mm a").format("h:mm a")}</p>
          </div>
        </div>
        <footer className="article-footer">
          <form action={`/foodlogs/${log._id}?_method=DELETE`} method="POST">
            <input
              type="submit"
              value="delete"
              className="outline"
              style={{ width: "auto" }}
            />
          </form>
          <a
            href={`/foodlogs/${log._id}/edit`}
            role="button"
            className="outline"
          >
            edit
          </a>
        </footer>
      </article>
    </DefaultLayout>
  );
}
