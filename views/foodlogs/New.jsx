import React from "react";
import DefaultLayout from "../layouts/Default.jsx";

export default function New() {
  return (
    <DefaultLayout>
      <h2>Add a food log entry</h2>
      <form action="/foodlogs" method="POST">
        Name: <input type="text" name="name" />
        <input type="submit" name="" value="create log" className="outline" />
      </form>
    </DefaultLayout>
  );
}
