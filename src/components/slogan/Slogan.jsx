import React from "react";

function Slogan({ title = "We Are Reviewers", text = "Helping Improvements" }) {
  return (
    <section>
      <div className="slogan">
        <h1>{title.substring(0, 20 )}...</h1>
        <h2 className="slogan-text">{text}</h2>
      </div>
    </section>
  );
}

export default Slogan;
