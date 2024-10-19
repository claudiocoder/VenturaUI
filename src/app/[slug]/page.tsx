import { notFound } from "next/navigation";
import { getPostBySlug } from "../lib/mdx";
import CoverImage from "../components/CoverImage";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

interface BlogPageProps {
  slug: string;
}
const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

const BlogPage = async ({ params }: { params: BlogPageProps }) => {
  const { content, meta } = await getPageContent(params.slug as string);
  if (!meta) {
    return notFound();
  }

  return (
    <div>
      <CoverImage
        heigth={"30vh"}
        thumbnailUrl={meta.thumbnailUrl}
        title={meta.country}
        imgposition="center 40%"
      />

      <div className="px-5 my-10 md:px-[20%]">
        <h1 className="text-3xl md:text-4xl font-bold mb-5">{meta.title}</h1>
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center">
            <Image
              src={"/img/users/autor.jpg"}
              alt={"autor"}
              width={40}
              height={40}
              className="rounded-full mr-2 shadow-xl"
            />
            <p className="italic">Por {meta.author}</p>
          </div>
          <div>
            <p className="italic font-bold">
              {format(parseISO(meta.date as string), "MMMM dd, yyyy", {
                locale: es,
              })}
            </p>
          </div>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default BlogPage;
