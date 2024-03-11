import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import {
  SignupInput,
  SigninInput,
} from "@giridhar_patel/blogit-common";

const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const [payload, setPayload] = useState<SignupInput>({
    email: "",
    name: "",
    password: "",
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="border-[0.5px] p-5 rounded-md shadow-2xl">
        <div>
         
          {type === "signin" ? (
            <div>
              <div className="text-2xl font-bold text-center pt-3">Create Account</div>
              <div className="text-center mb-3 mt-1 text-gray-700">  
                Already have an account? <Link className="underline " to={"/signin"}> Signin</Link>{" "}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-2xl font-bold text-center pt-3">Sign In</div>
            <div className="text-center text-gray-700 mb-3 mt-1">
              Do not have an account?
              <Link className="hover:text-gray-900 underline " to={"/signup"}>
                Signup
              </Link>
            </div>
            </div>
          )}
        </div>
        <Input
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, email: e.target.value }))
          }
          type="text"
          label="email"
          placeholder="giridhar@gmail.com"
        />

        <Input
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, naem: e.target.value }))
          }
          type="text"
          label="name"
          placeholder="giridhar"
        />

        <Input
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, password: e.target.value }))
          }
          type="password"
          label="password"
          placeholder="*****"
        />
        <Button button="signin"/>
      </div>
    </div>
  );
};

export default Auth;

interface ButtonInputs {
  button : string
}

function Button({ button} : ButtonInputs){
  return(
  <button type="button" className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-3 mb-2 ">{button}</button>
  )
}
