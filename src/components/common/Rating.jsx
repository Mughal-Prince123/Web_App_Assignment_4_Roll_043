const Rating = ({ rate = 0, count = 0 }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < Math.floor(rate) ? '★' : '☆'}</span>
        ))}
      </div>
      <span className="text-sm font-medium text-gray-600">({rate})</span>
      <span className="text-xs text-gray-400 border-l pl-2">{count} reviews</span>
    </div>
  );
};
export default Rating;