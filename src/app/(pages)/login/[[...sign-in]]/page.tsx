import { SignIn } from "@clerk/nextjs";
import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center py-[10%]">
      <SignIn />
    </div>
  );
}

export default Login;
