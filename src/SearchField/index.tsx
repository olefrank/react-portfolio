import SearchFieldComponent from "../components/SearchField";

export default function SearchField() {
  return (
    <div className="grid grid-cols-2 gap-8 divide-x">
      <div className="flex flex-col items-center justify-start">
        <SearchFieldComponent />
      </div>
      <div className="pl-8">
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
