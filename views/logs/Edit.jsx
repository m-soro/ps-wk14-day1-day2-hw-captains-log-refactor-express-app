import React from "react";
import DefaultLayout from "../layouts/Default";

export default function Edit({ log }) {
  return (
    <DefaultLayout>
      <h2>Edit {log.title}</h2>
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
        Title: <input type="text" name="title" value={log.title} />
        Entry:
        <textarea name="entry" rows="4" cols="50" value={log.entry}>
          Enter log
        </textarea>
        Ship is Broken?
        <input type="checkbox" name="shipIsBroken" checked></input>
        Author: <input type="text" name="author" value={log.author} />
        <input type="submit" value="submit changes" />
      </form>
    </DefaultLayout>
  );
}
