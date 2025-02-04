import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

type UserLoginProps = {
  toggleOpen?: () => void;
};

const UserLogin = (props: UserLoginProps) => {
  const { toggleOpen } = props;
  const { user } = useUser();
  const pathname = usePathname();
  return (
    <div className="cursor-pointer">
      {!user ? (
        pathname !== "/login" ? (
          <div className="flex items-center gap-4">
            <button className="bg-white md:bg-venturaprimary px-8 py-2 radius rounded-lg text-venturaprimary  md:text-white md:text-xl">
              <Link
                href="/signUp"
                onClick={() => (toggleOpen ? toggleOpen() : null)}
              >
                Registrarse
              </Link>
            </button>
            <button className="bg-white md:bg-venturaprimary px-8 py-2 radius rounded-lg text-venturaprimary md:text-white md:text-xl">
              <Link
                href="/signIn"
                onClick={() => (toggleOpen ? toggleOpen() : null)}
              >
                Iniciar sesión
              </Link>
            </button>
          </div>
        ) : null
      ) : (
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden border-2 border-white md:border-venturaprimary">
            <Image
              src={user.imageUrl}
              alt={user.username || "profileImageurl"}
              width={50}
              height={50}
            />
          </div>
          <div className="text-2xl text-white md:text-black">
            {user.fullName}
          </div>
          <SignOutButton>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="text-3xl text-white md:text-venturaprimary md:px-5"
            />
          </SignOutButton>
        </div>
      )}
    </div>
  );
};

export default UserLogin;
