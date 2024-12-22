import { Search } from 'lucide-react';

function SearchBar({ placeholder = "Search your course" }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 border rounded-lg w-[300px]"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
    </div>
  );
}

export default SearchBar;