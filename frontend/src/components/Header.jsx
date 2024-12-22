import { Bell, Settings, HelpCircle, MessageSquare } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src="/logo.svg" alt="Quyl" className="h-8" />
          <nav className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
            <a href="#" className="text-gray-900 font-medium">Students</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Chapter</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Reports</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-gray-900">
            <HelpCircle className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <MessageSquare className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <Settings className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">Adeline H. Dancy</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;