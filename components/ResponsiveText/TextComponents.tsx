export const ResponsiveH1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="mb-8 text-xl sm:text-2xl md:text-4xl xl:text-5xl">
      {children}
    </h1>
  );
};

export const ResponsiveH2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl sm:mb-2 md:mb-4 lg:mb-8 xl:mb-12">
      {children}
    </h2>
  );
};
