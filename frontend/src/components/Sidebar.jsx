import { Clock, Layout, HelpCircle, PieChart, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-white border-r">
      <div className="p-6">
        <img src="/logo.svg" alt="Quyl" className="h-8" />
      </div>
      <nav className="px-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50">
              <Clock className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-900 bg-gray-100 rounded-lg">
              <Layout className="w-5 h-5" />
              <span>Students</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50">
              <PieChart className="w-5 h-5" />
              <span>Chapter</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50">
              <HelpCircle className="w-5 h-5" />
              <span>Help</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}