import { ChangeEvent, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import spinner from "./spinner.gif";

const SEARCH_RESULTS = ["a", "b", "c", "d", "e"];
export const DEBOUNCE_TIMEOUT = 1000;
export const SEARCH_RESULTS_LABEL = "Search results";

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
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-sm border border-gray-400 flex flex-col items-center justify-start">
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
          <ul aria-label={SEARCH_RESULTS_LABEL}>
            {results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <div>
        <h1>Search Field</h1>
        <h3>Description</h3>
        <p>Make a search field that does an async search</p>

        <h3>Use cases</h3>
        <ul>
          <li>Search should be 'debounced' by 1 second</li>
          <li>Show a spinner while loading search results</li>
          <li>Clear search results list when input is changed</li>
        </ul>
      </div>
    </div>
  );
}
