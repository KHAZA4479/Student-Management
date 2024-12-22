import { Search, Filter } from 'lucide-react';

export default function StudentFilters() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search your course"
            className="pl-10 pr-4 py-2 border rounded-lg w-[300px]"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
            AY 2024-25 <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
            CBSE 9 <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>
      <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">
        Add new Student
      </button>
    </div>
  );
}
