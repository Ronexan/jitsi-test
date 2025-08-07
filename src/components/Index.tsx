import { useState } from "react";
import { useEffect } from "react";

export default function Index() {
  const [input, setInput] = useState("");
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    (() => {
      fetch(import.meta.env.PUBLIC_SERVER_URL+"/info")
        .then(res => res.json())
        .then(res => setData(res))
        .finally(() => setFetching(false))
    })();
  }, [])

  return (
    <>
      <input
        style={inputStyle}
        placeholder="Enter something"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
      <p style={previewStyle}>{input}</p>
      {fetching && <p>Fetching...</p>}
      {data && (
        <>
          <p>Server Response:</p>
          <p>{data}</p>
        </>
      )}
    </>
  );
}

const inputStyle: React.CSSProperties = {
  border: "1px solid black",
  outline: "none",
  padding: "5px 10px",
  borderRadius: "10px",
};

const previewStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
};
