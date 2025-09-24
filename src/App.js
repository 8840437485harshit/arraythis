import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
export default function StringArrayFormatter() {
  const [input, setInput] = useState("");
  const [quoteType, setQuoteType] = useState('"');
  const [removeDuplicates, setRemoveDuplicates] = useState(false);
  const [output, setOutput] = useState("");
  const [space,setspace]=useState(true);

  const handleConvert = () => {
    let items = input
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (removeDuplicates) {
      items = [...new Set(items)];
    }
    if (space){
    const formatted = `[${items.map((s) => `${quoteType}${s}${quoteType}`).join(", ")}]`;
      setOutput(formatted);
  }
    else{
      const formatted = `[${items.map((s) => `${quoteType}${s}${quoteType}`).join(",")}]`;
      setOutput(formatted);
    }
  };

  const handlespacechange = (e)=>{
    const stringValue = e.target.value;

  // Convert the string to a boolean
  const booleanValue = stringValue === 'true';

  setspace(booleanValue);
  }

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body">
        <h2 className="card-title mb-4">String to Array Converter</h2>

        {/* Input */}
        <textarea
          rows="8"
          className="form-control mb-3"
          placeholder="Enter strings (one per line)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Options */}
        <div className="d-flex align-items-center mb-3 gap-3">
          <div>
            <label className="form-label me-2">space: </label>
            <select
              value={space}
              onChange={handlespacechange}
              className="border rounded-3 p-1"
            >
              <option value='true'>yes</option>
              <option value='false'>no</option>
            </select>
          </div>

<div className="d-flex align-items-center mb-3 gap-3">
          <div>
            <label className="form-label me-2">Quotes: </label>
            <select
              value={quoteType}
              onChange={(e) => setQuoteType(e.target.value)}
              className="border rounded-3 p-1"
            >
              <option value='"'>Double (")</option>
              <option value="'">Single (')</option>
              <option value="">No quote</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={removeDuplicates}
                onChange={() => setRemoveDuplicates(!removeDuplicates)}
              />
              Remove Duplicates
            </label>
          </div>
        </div>

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          className="bg-primary text-white px-4 py-2 rounded-3 shadow hover:bg-blue-600 custom-hover"
        >
          Convert
        </button>

        {/* Output */}
        {output && (
          <div className="mt-4">
            <label className="font-medium">Output Array:</label>
            <pre className="bg-gray-100 p-3 rounded-lg whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
}