import React, { useState } from 'react';

function AnalyzerForm({ onAnalyze }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(url);
  };

  return (
    <form onSubmit={handleSubmit} className="analyzer-form">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
        required
      />
      {/* <button >Analyze</button> */}
    <button className="button-85" type="submit">Analyze</button>

    </form>
  );
}

export default AnalyzerForm;