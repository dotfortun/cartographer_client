import React, { Component, useState, useMemo } from "react";

import tt, { generateTable, ParsedTable } from "@lusc/truth-table";

import debounce from "lodash.debounce";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

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
      {/* <input
        type="text"
        value={input}
        onInput={(e) => debounce(setInput(e.target.value), 300)}
        name="expression"
      /> */}

      <table>
        <thead>
          <td>Output:</td>
        </thead>
      </table>

      <p className="credits">
        Parser module cribbed from{" "}
        <a href="https://github.com/melusc/truth-table">here</a>.
      </p>
    </div>
  );
};
