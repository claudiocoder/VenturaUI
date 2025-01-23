import Loading from "@/app/components/Loading";
import { currentUser } from "@clerk/nextjs/server";

const createNewUser = async () => {
  const user = await currentUser();
  console.log(user);
};

const NewUser = async () => {
  await createNewUser();
  return <Loading />;
};

export default NewUser;
