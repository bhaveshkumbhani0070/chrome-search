import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");
  const gsearchquery = (text) => {
    var query = text.split(" ").join("+");
    return query;
  };

  const search = (value) => {
    setQuery(gsearchquery(value));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: value,
        correctTypoInPartialWord: false,
        languages: ["en", "de", "es"],
        maxNumberOfPredictions: 5,
        returnTokenScores: false,
      }),
    };
    fetch("https://api.typewise.ai/latest/completion/complete", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
      });
  };
  return (
    <div className="App">
      <form
        onSubmit={() =>
          window.open("https://www.google.com/search?q=" + query, "_blank")
        }
      >
        <input
          className="searchTerm"
          placeholder="Enter Post Title"
          onChange={(event) => search(event.target.value)}
        />
        {/* {query &&
          data.map((post, index) => (
            <div className="box" key={post.id}>
              <p>{post.title}</p>
              <p>{post.author}</p>
            </div>
          ))} */}
      </form>
    </div>
  );
}
export default App;
