import React, { Component, useState } from "react";

import { parseBooleanQuery } from "boolean-parser";

const TTRow = (val) => {
  return (
    <tr>
      <td>{val}</td>
    </tr>
  );
};

// This is just a warmup:
//I'm parsing a logical expression
// and generating a truth table for it.
export const TruthTable = () => {
  const [input, setInput] = useState("(a AND (b OR c)) OR (a OR (b AND c))");
  return (
    <div className="blah">
      <label htmlFor="expression">Logical Expression:&nbsp;</label>
      <input
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
        name="expression"
      />

      <table>{parseBooleanQuery(input).map((elem) => TTRow(elem))}</table>

      <p className="credits">
        Parser module cribbed from{" "}
        <a href="https://github.com/NimitzDEV/logical-expression-parser">
          here
        </a>
        .
      </p>
    </div>
  );
};
