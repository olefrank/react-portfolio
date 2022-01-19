import SearchFieldComponent from "../components/SearchField";

export default function SearchField() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div>
        <h2 className="text-center">Search Field</h2>
        {/* <h4>Description</h4>
        <p>Make a search field that does an async search</p>
        <h4>Use cases</h4>
        <ul className="text-base">
          <li>Search should be 'debounced' by 1 second</li>
          <li>Show a spinner while loading search results</li>
          <li>Clear search results list when input is changed</li>
        </ul> */}
      </div>
      <div>
        <SearchFieldComponent />
      </div>
    </div>
  );
}
