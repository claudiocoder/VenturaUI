import { notFound } from "next/navigation";
import { getPostBySlug } from "../lib/mdx";
import CoverImage from "../components/CoverImage";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
    <div className="w-full">
      <CoverImage
        heigth={"30vh"}
        thumbnailUrl={meta.thumbnailUrl}
        title={meta.country}
        imgposition="center 40%"
      />
      <div className="flex items-start w-full px-[10%] py-10">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-venturaprimary"
            />
            <div className="text-venturaprimary font-bold text-2xl pl-2">
              Regresar
            </div>
          </div>
        </Link>
        <div className="px-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-5">{meta.title}</h1>
          <div className="flex justify-between items-center mb-10">
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
    </div>
  );
};

export default BlogPage;
