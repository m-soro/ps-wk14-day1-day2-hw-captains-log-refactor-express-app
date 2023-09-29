import React from "react";
import DefaultLayout from "../layouts/Default.jsx";

export default function New() {
  return (
    <DefaultLayout>
      <h2>Add an entry</h2>
      <form action="/logs" method="POST">
        Title: <input type="text" name="title" />
        Entry:
        <textarea name="entry" rows="4" cols="50">
          Enter log
        </textarea>
        Ship is Broken?&nbsp;&nbsp;
        <input type="checkbox" name="shipIsBroken" checked />
        <br />
        <br />
        Author: <input type="text" name="author" />
        <input type="submit" name="" value="create log" className="outline" />
      </form>
    </DefaultLayout>
  );
}
