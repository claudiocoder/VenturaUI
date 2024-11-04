import Image from "next/image";
import Link from "next/link";

interface BackpackerProps {
  src: string;
  alt: string;
  className?: string;
  slug: string;
}

function Backpacker(props: BackpackerProps) {
  const { className } = props;
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 px-[10%]">
        <Image
          height={500}
          width={650}
          src={props.src}
          alt={props.alt}
          className={`${className}`}
        />
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="text-2xl font-bold mb-2">Claudio Arturo Moreno</h2>
          <h3 className="tex-xl italic mb-2">México</h3>
          <p className="mb-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos
            obcaecati earum quia esse tempore iste eius, libero reprehenderit,
            quam adipisci nesciunt asperiores at perspiciatis, ratione sequi
            tempora assumenda maxime.
          </p>
          <Link href={props.slug}>
            <div className="font-bold text-venturaprimary cursor-pointer">
              + Leer más
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Backpacker;
