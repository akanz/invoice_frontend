"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "../../../hooks/useStore";
import { Axios, base_url } from "../../../utils/axios";
import Message from "../alerts/Message";
import AuthLayout from "./AuthLayout";

const Login = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const updateToken = useStore((state) => state.updateToken);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res: any = await Axios.post(`/auth/login`, {
        email,
        password,
      });
      console.log(res);

      toast("successfully logged in");
      setLoading(false);
      if (typeof window !== "undefined") {
        // Perform localStorage action
        localStorage.setItem("token", res.token);
      }

      updateToken(res.token);
      push("/");
    } catch (error: any) {
      console.log(error);
      toast(error.message);
      setError(error.message);
      setLoading(false);
    }
    setTimeout(() => {
      setError(null);
    }, 3000);
  };
  return (
    <AuthLayout>
      <div>
        <TextInput
          handleChange={(e: any) => setEmail(e.target.value)}
          value={email}
          label="Email"
        />
        <TextInput
          handleChange={(e: any) => setPassword(e.target.value)}
          value={password}
          label="Password"
          name="password"
        />
      </div>
      <div>
        <Button
          loading={loading}
          text="Login"
          onClick={onSubmit}
          classname="bg-greypurple text-white"
        />
      </div>
      <div className="mt-2">
        <Link className="text-xs text-greypurple" href={"/register"}>
          {" "}
          Not registered? sign up
        </Link>
      </div>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: error ? "#EC5757" : "#33D69F",
            color: 'white'
          },
          duration: 2500
        }}
      />
    </AuthLayout>
  );
};

export default Login;
