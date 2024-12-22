import { BookOpen } from 'lucide-react';

function CourseTag({ course }) {
  return (
    <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
      <BookOpen className="w-4 h-4" />
      {course}
    </div>
  );
}

export default CourseTag;