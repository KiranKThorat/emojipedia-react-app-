import React from "react";
import emojipedia from "../Emojipedia";
console.log (emojipedia);

function EmojiDictionary(props){
    return(
    <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emoji}
      </span>
      <span>{props.name}</span>
    </dt>
    <dd>
     {props.meaning}
    </dd>
  </div>
    );

}
export default EmojiDictionary;