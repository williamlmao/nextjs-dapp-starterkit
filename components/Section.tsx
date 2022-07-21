import { ResponsiveH2 } from "./ResponsiveText/TextComponents";

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
    <div className={`w-full p-4 rounded-md shadow-md bg-base-100 ${className}`}>
      <ResponsiveH2>{title}</ResponsiveH2>
      {children}
    </div>
  );
};
