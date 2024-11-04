import Image from "next/image";

export const MDXComponents = {
  h2: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className={"text-base md:text-xl font-bold text-left"} />
  ),
  p: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <p {...props} className={"text-base text-gray-900 text-justify"} />
  ),
  img: ({ ...props }) => {
    return (
      <Image
        height={500}
        width={650}
        src={props.src}
        alt={props.alt}
        {...props}
        className={"mx-auto my-10 shadow-xl mb-2 rounded-lg"}
      />
    );
  },
};
