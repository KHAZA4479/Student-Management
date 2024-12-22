import { Filter } from 'lucide-react';

function FilterButton({ label }) {
  return (
    <button className="px-4 py-2 bg-gray-100 rounded-lg flex items-center gap-2">
      {label} <Filter className="w-4 h-4" />
    </button>
  );
}

export default FilterButton;