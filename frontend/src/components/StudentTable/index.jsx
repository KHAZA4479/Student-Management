import { format } from 'date-fns';
import CourseTag from '../CourseTag';
import StatusIndicator from '../StatusIndicator';

function StudentTable({ students }) {
  return (
    <div className="bg-white rounded-lg shadow">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Student Name</th>
            <th className="text-left p-4">Cohort</th>
            <th className="text-left p-4">Courses</th>
            <th className="text-left p-4">Date Joined</th>
            <th className="text-left p-4">Last login</th>
            <th className="text-left p-4">Status</th>
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
                    <CourseTag key={index} course={course} />
                  ))}
                </div>
              </td>
              <td className="p-4">{format(new Date(student.dateJoined), 'dd. MMM. yyyy')}</td>
              <td className="p-4">{format(new Date(student.lastLogin), 'dd. MMM. yyyy h:mm a')}</td>
              <td className="p-4">
                <StatusIndicator status={student.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;