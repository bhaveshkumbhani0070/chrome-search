import React, { useState } from "react";
import "./App.css";
import Data from "./mock-data.json";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <input
        className="searchTerm"
        placeholder="Enter Post Title"
        onChange={(event) => setQuery(event.target.value)}
      />
      {query &&
        Data.filter((post) => {
          if (query === "") {
            return post;
          } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((post, index) => (
          <div className="box" key={post.id}>
            <p>{post.title}</p>
            <p>{post.author}</p>
          </div>
        ))}
    </div>
  );
}
export default App;
