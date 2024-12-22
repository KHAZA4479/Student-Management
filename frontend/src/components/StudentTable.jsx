import { format } from 'date-fns';
import { BookOpen } from 'lucide-react';

export default function StudentTable({ students }) {
  return (
    <div className="bg-white rounded-lg shadow">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Student Name</th>
            <th className="p-4 text-left">Cohort</th>
            <th className="p-4 text-left">Courses</th>
            <th className="p-4 text-left">Date Joined</th>
            <th className="p-4 text-left">Last login</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="border-b">
              <td className="p-4">{student.name}</td>
              <td className="p-4">{student.cohort}</td>
              <td className="p-4">
                <div className="flex gap-2">
                  {student.courses.map((course, index) => (
                    <div key={index} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded">
                      <BookOpen className="w-4 h-4" />
                      {course}
                    </div>
                  ))}
                </div>
              </td>
              <td className="p-4">{format(new Date(student.dateJoined), 'dd. MMM. yyyy')}</td>
              <td className="p-4">{format(new Date(student.lastLogin), 'dd. MMM. yyyy h:mm a')}</td>
              <td className="p-4">
                <span className={`w-2 h-2 rounded-full inline-block ${
                  student.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                }`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

