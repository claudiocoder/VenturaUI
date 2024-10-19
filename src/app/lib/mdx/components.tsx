export const MDXComponents = {
  h2: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className={"text-base md:text-xl font-bold text-left"} />
  ),
};
