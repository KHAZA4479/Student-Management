function NavLink({ href, children, active }) {
  return (
    <a 
      href={href} 
      className={`${
        active ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {children}
    </a>
  );
}

export default NavLink;