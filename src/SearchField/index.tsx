import { ChangeEvent, useEffect, useState } from "react";
import debounce from "lodash.debounce";

const searchResults = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

// helper fn to simulate a async network search request
async function doSearch(): Promise<string[]> {
  return new Promise((res, rej) => {
    setTimeout(() => res(searchResults), 1000);
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
      <h1 className="text-3xl font-bold underline">Search field</h1>
      <div className="flex items-center">
        <input
          className={loading ? "spinner" : undefined}
          autoFocus
          value={term}
          onChange={onChange}
        />
      </div>
      <ul>
        {results.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
