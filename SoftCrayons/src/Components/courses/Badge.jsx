const badgeStyles = {
  hot: "bg-orange-500 text-white",
  new: "bg-blue-600 text-white",
  top: "bg-violet-600 text-white",
  default: "bg-gray-800 text-white",
};

const getBadgeType = (badge = "") => {
  const b = badge.toLowerCase();
  if (b.includes("hot") || b.includes("top") || b.includes("best"))
    return "hot";
  if (b.includes("new") || b.includes("emerging")) return "new";
  if (b.includes("pro") || b.includes("advanced") || b.includes("specialized"))
    return "top";
  return "default";
};

const Badge = ({ text, size = "sm" }) => {
  const type = getBadgeType(text);
  const style = badgeStyles[type];
  const sizeClass =
    size === "sm" ? "text-[10px] px-2 py-0.5" : "text-xs px-3 py-1";

  return (
    <span
      className={`inline-block font-semibold tracking-wide rounded-md uppercase ${style} ${sizeClass}`}
    >
      {text}
    </span>
  );
};

export default Badge;
