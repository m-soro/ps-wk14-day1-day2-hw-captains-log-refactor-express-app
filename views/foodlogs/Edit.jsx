import React from "react";
import DefaultLayout from "../layouts/Default";

export default function Edit({ log }) {
  return (
    <DefaultLayout>
      <h2>Edit {log.name}</h2>
      <form action={`/foodlogs/${log._id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" value={log.name} />
        <input type="submit" value="submit changes" className="outline" />
      </form>
    </DefaultLayout>
  );
}
