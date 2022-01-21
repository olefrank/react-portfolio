import SearchFieldComponent from "../components/SearchField";

export default function SearchField() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div>
        <h2 className="text-center">Search Field</h2>
      </div>
      <div>
        <SearchFieldComponent />
      </div>
    </div>
  );
}
