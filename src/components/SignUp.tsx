import { FC } from "react";
import { Icons } from "./icons";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignUp: FC = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center space-y-6  sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
        <p className="text-sm max-w-xs mx-auto">
          By signing Up you agree to our terms and conditions
        </p>

        {/* Sign in form */}

        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          Already have an Account?{" "}
          <Link
            href="/sign-in"
            className="underline underline-offset-4 hover:text-zinc-800"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
