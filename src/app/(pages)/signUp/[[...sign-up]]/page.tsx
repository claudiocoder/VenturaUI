import { SignUp } from "@clerk/nextjs";
import React from "react";

function ClerkSignUp() {
  return (
    <div className="flex justify-center items-center py-[10%]">
      <SignUp fallbackRedirectUrl="/newUser" forceRedirectUrl="/newUser" />
    </div>
  );
}

export default ClerkSignUp;
