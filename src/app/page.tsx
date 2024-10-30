import Image from "next/image";
import Link from "next/link";
import About from "./components/About";
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
      <div className="flex flex-col md:flex-row px-10 py-10">
        <div>
          {posts.length === 0 && (
            <div className="mt-10 p-10 w-[100%]">
              <h2 className="text-2xl font-bold text-center">
                No hay entradas disponibles
              </h2>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full md:w-[70%] mb-10">
          {posts.length > 0 && (
            <h3 className="text-2xl font-bold text-center md:text-start mb-5">
              Últimos viajes
            </h3>
          )}
          <div className="flex flex-row w-100 justify-between">
            {posts.length > 0 &&
              posts.map((post) => {
                if (post.visibility) {
                  return (
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
                  );
                }
              })}
          </div>
          {posts.length >= 6 && (
            <Link href="/content">
              <div className="text-venturaprimary w-full text-center py-3 font-bold cursor-pointer">
                + Ver más
              </div>
            </Link>
          )}
          <div>
            <About />
          </div>
        </div>
        <div className="flex w-full md:w-[30%]">
          <div className="flex flex-col w-full items-center">
            <h2 className="text-2xl font-bold text-center mb-10">
              Mochilero del mes
            </h2>
            <div>
              <div
                className="w-[250px] h-[370px] flex rounded-xl items-center text-center justify-end flex-col py-5 cursor-pointer"
                style={{
                  background: `url('/img/users/autor.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3 className="text-white z-20 text-2xl font-bold text-stroke-3">
                  Claudio Moreno
                </h3>
              </div>
            </div>
            <Link href="/experiences">
              <div className="text-venturaprimary w-full text-center py-5 font-bold cursor-pointer">
                + Ver más historias
              </div>
            </Link>
            <div className="text-2xl font-bold text-center my-10">
              <h2>¿Qué llevar en tu mochila viajera?</h2>
            </div>
            <Link href="/backpack">
              <Image
                className="z-[-1]"
                width={250}
                height={250}
                src={"/img/backpack.png"}
                alt="hero image example"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
