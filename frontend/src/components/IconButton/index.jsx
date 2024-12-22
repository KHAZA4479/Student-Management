function IconButton({ icon: Icon }) {
  return (
    <button className="text-gray-600 hover:text-gray-900">
      <Icon className="w-5 h-5" />
    </button>
  );
}

export default IconButton;