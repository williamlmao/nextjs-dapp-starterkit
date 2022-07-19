export const Section = ({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <div className={`w-full p-4 rounded-md shadow-md ${className}`}>
      <div className="text-4xl font-bold mb-8">{title}</div>
      {children}
    </div>
  );
};
