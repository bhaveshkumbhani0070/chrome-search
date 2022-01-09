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
        setData(json.predictions);
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
          placeholder="Search"
          onChange={(event) => search(event.target.value)}
        />
        {query &&
          data &&
          data.length &&
          data.map((post, index) => (
            <div
              className="box"
              key={post.score}
              onClick={() =>
                window.open(
                  "https://www.google.com/search?q=" + post.text,
                  "_blank"
                )
              }
            >
              <p>{post.text}</p>
            </div>
          ))}
      </form>
    </div>
  );
}
export default App;
