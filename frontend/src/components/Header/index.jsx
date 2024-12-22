import { Bell, Settings, HelpCircle, MessageSquare } from 'lucide-react';
import NavLink from '../NavLink';
import IconButton from '../IconButton';

function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src="/logo.svg" alt="Quyl" className="h-8" />
          <nav className="flex gap-6">
            <NavLink href="#">Dashboard</NavLink>
            <NavLink href="#" active>Students</NavLink>
            <NavLink href="#">Chapter</NavLink>
            <NavLink href="#">Reports</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <IconButton icon={HelpCircle} />
          <IconButton icon={MessageSquare} />
          <IconButton icon={Bell} />
          <IconButton icon={Settings} />
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