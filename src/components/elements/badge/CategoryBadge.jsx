function CategoryBadge({ text }) {
  return (
    <div className="inline-block bg-taggreen px-2 rounded-xl text-white">
      <p className="text-xs leading-5">{text}</p>
    </div>
  );
}

export default CategoryBadge;
