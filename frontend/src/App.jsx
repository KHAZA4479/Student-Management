import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from './store/studentsSlice';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import StudentFilters from './components/StudentFilters';

function App() {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container px-4 py-8 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <StudentFilters />
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">
            Add new Student
          </button>
        </div>
        
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <StudentTable students={students} />
        )}
      </main>
    </div>
  );
}

export default App;