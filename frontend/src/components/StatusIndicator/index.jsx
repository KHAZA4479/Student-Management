function StatusIndicator({ status }) {
  return (
    <span 
      className={`w-2 h-2 rounded-full inline-block ${
        status === 'active' ? 'bg-green-500' : 'bg-red-500'
      }`} 
    />
  );
}

export default StatusIndicator;