import Link from "next/link";
import CoverImage from "./components/CoverImage";
import { getAllPostsMeta } from "./lib/mdx";

export default async function Home() {
  const posts = await getAllPostsMeta();

  return (
    <div className="flex flex-col">
      <CoverImage
        heigth={"45vh"}
        title="Descubre tu próxima aventura"
        subtitle="Guias para mochileros y viajeros frecuentes"
      />
      <div>
        {posts.length === 0 && (
          <div className="mt-10 p-10 w-[100%]">
            <h2 className="text-2xl font-bold text-center">
              No hay entradas disponibles
            </h2>
          </div>
        )}
      </div>
      <div className="flex flex-col mx-10 w-[60%]">
        {posts.length > 0 && (
          <h3 className="text-3xl font-bold py-10">Últimos viajes</h3>
        )}
        <div className="flex flex-row w-100 justify-between">
          {posts.length > 0 &&
            posts.map((post) => (
              <div key={post.id} className="shadow-xl rounded-2xl">
                <Link href={post.slug}>
                  <div
                    className="w-[300px] h-[225px] flex rounded-xl items-center text-center justify-end flex-col py-5 cursor-pointer"
                    style={{
                      background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('${post.cardThumbnailUrl}')`,
                      backgroundSize: "cover",
                    }}
                  >
                    <h3 className="text-white z-20 text-2xl font-bold text-stroke-3">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
