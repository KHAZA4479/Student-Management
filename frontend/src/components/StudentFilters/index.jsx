import SearchBar from '../SearchBar';
import FilterButton from '../FilterButton';

function StudentFilters() {
  return (
    <div className="flex gap-4">
      <SearchBar />
      <div className="flex gap-2">
        <FilterButton label="AY 2024-25" />
        <FilterButton label="CBSE 9" />
      </div>
    </div>
  );
}

export default StudentFilters;