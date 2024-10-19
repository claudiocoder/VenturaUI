import { notFound } from "next/navigation";
import { getPostBySlug } from "../lib/mdx";
import CoverImage from "../components/CoverImage";

interface BlogPageProps {
  slug: string;
}
const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

const BlogPage = async ({ params }: { params: BlogPageProps }) => {
  const { meta } = await getPageContent(params.slug as string);
  if (!meta) {
    return notFound();
  }

  return (
    <div>
      <CoverImage
        heigth={"40vh"}
        thumbnailUrl={meta.thumbnailUrl}
        title="Corea"
        imgposition="center 40%"
      />
    </div>
  );
};

export default BlogPage;
