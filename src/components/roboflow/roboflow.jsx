import React, { useState } from "react";
import "./roboflow.css";

const TrashAIForm = () => {
  const [uploadMethod, setUploadMethod] = useState("upload");
  const [fileName, setFileName] = useState("");
  const [url, setUrl] = useState("");
  const [model, setModel] = useState("");
  const [version, setVersion] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [result, setResult] = useState("");

  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name || "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to run inference and set result
    setResult("Here is your JSON");
  };

  return (
    <form id="inputForm" onSubmit={handleSubmit}>
      <div className="header">
        <div className="header__grid">
          <img
            className="header__logo"
            src="https://uploads-ssl.webflow.com/5f6bc60e665f54545a1e52a5/6143750f1177056d60fc52d9_roboflow_logomark_inference.png"
            alt="Roboflow Inference"
          />
          <div>
            <label className="header__label" htmlFor="model">Model</label>
            <input
              className="input"
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div>
            <label className="header__label" htmlFor="version">Version</label>
            <input
              className="input"
              type="number"
              id="version"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            />
          </div>
          <div>
            <label className="header__label" htmlFor="api_key">API Key</label>
            <input
              className="input"
              type="text"
              id="api_key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="content">
        <div className="content__grid">
          <div className="col-12-s6-m4" id="method">
            <label className="input__label">Upload Method</label>
            <div>
              <button
                type="button"
                className={`bttn left fill ${uploadMethod === "upload" ? "active" : ""}`}
                onClick={() => setUploadMethod("upload")}
              >
                Upload
              </button>
              <button
                type="button"
                className={`bttn right fill ${uploadMethod === "url" ? "active" : ""}`}
                onClick={() => setUploadMethod("url")}
              >
                URL
              </button>
            </div>
          </div>

          {uploadMethod === "upload" ? (
            <div className="col-12-m8" id="fileSelectionContainer">
              <label className="input__label" htmlFor="file">Select File</label>
              <div className="flex">
                <input
                  className="input input--left flex-1"
                  type="text"
                  id="fileName"
                  value={fileName}
                  disabled
                />
                <button type="button" className="bttn right active">
                  <label htmlFor="file">Browse</label>
                </button>
              </div>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <div className="col-12-m8" id="urlContainer">
              <label className="input__label" htmlFor="url">Enter Image URL</label>
              <div className="flex">
                <input
                  type="text"
                  id="url"
                  placeholder="https://path.to/your.jpg"
                  className="input"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="col-6-m3" id="format">
            <label className="input__label">Inference Result</label>
            <div>
              <button
                type="button"
                className="bttn right fill active"
                data-value="json"
              >
                JSON
              </button>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="bttn__primary">Run Inference</button>
          </div>
        </div>

        <div className="result" id="resultContainer">
          <div className="divider"></div>
          <div className="result__header">
            <h3 className="headline">Result</h3>
            <a href="#">Copy Code</a>
          </div>
          <pre id="output" className="codeblock">{result}</pre>
        </div>
      </div>
    </form>
  );
};

export default TrashAIForm;




