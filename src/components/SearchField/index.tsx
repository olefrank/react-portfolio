import { ChangeEvent, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import spinner from "./spinner.gif";

const SEARCH_RESULTS = ["a", "b", "c", "d", "e"];
export const DEBOUNCE_TIMEOUT = 1000;

// helper fn to simulate a async network search request
function doSearch(): Promise<string[]> {
  return new Promise((res, rej) => {
    setTimeout(() => res(SEARCH_RESULTS), DEBOUNCE_TIMEOUT);
  });
}

export default function SearchField() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = debounce(async () => {
    // simulate async search
    const result = await doSearch();
    setResults(result);
    setLoading(false);
  }, 500);

  useEffect(() => {
    // reset search results list
    setResults([]);

    if (term && !loading) {
      setLoading(true);
      debouncedSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  // handle click on Increment
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setTerm(value);
  }

  return (
    <div>
      <div className="relative inline-block">
        <input className="p-1" autoFocus value={term} onChange={onChange} />
        {loading ? (
          <img
            role="progressbar"
            src={spinner}
            alt="Loading search results..."
            className="absolute right-1 top-1 m-0 h-6"
          />
        ) : null}
      </div>
      {results.length ? (
        <ul>
          {results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
