import React from "react";
import EmojiDictionary from "./EmojiDictionary";
import emojipedia from "../Emojipedia";


function Mapping(emojidata){
    return (
        <EmojiDictionary 
        key ={emojidata.id}
        emoji ={emojidata.emoji}
        name ={emojidata.name}
        meaning ={emojidata.meaning}


        />
    )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(Mapping)}

      </dl>
      </div>
  );
}

export default App;