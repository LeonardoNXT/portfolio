type GridPropsType = {
  className?: string;
};

export default function Grid({ className }: GridPropsType) {
  return (
    <div
      className="w-full h-full absolute top-0 left-0 z-1 grid"
      style={{ gridTemplateColumns: "repeat(30, 1fr)" }}
    >
      {[...Array(30)].map((_, i) => (
        <div key={i} className={`border-r w-full h-full ${className}`}></div>
      ))}
    </div>
  );
}
