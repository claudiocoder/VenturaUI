import { notFound } from "next/navigation";
import CoverImage from "../components/CoverImage";
import { getPostBySlug } from "../lib/mdx";
import { BlogModel } from "../models/Blog";
import ContentPage from "../components/contentPage";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

const BlogPage = async ({ params }: { params: BlogModel }) => {
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
      <ContentPage meta={meta} content={content} />
    </div>
  );
};

export default BlogPage;
