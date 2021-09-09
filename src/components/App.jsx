import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import Heading from "./Heading";

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">
        {emojipedia.map((emojipedia) => (
          <Entry
            key={emojipedia.id}
            emoji={emojipedia.emoji}
            name={emojipedia.name}
            meaning={emojipedia.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
