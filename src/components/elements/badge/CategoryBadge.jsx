function CategoryBadge({ text }) {
  return (
    <div className="inline-block bg-badgegray px-2 rounded-xl">
      <p className="text-xs leading-5">{text}</p>
    </div>
  );
}

export default CategoryBadge;
