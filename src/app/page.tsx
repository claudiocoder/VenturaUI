import CoverImage from "./components/CoverImage";
import { getAllPostsMeta } from "./lib/mdx";

export default async function Home() {
  const posts = await getAllPostsMeta();

  return (
    <div>
      <CoverImage />
      {posts.length === 0 && (
        <div className="mt-10 p-10">
          <h2 className="text-2xl font-bold text-center">
            No hay entradas disponibles
          </h2>
        </div>
      )}
    </div>
  );
}
