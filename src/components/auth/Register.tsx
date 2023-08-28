"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "../../../hooks/useStore";
import { Axios, base_url } from "../../../utils/axios";
import Message from "../alerts/Message";
import Button from "../Button";
import TextInput from "../TextInput";
import AuthLayout from "./AuthLayout";

const Register = () => {
  const { push } = useRouter();
  const updateToken = useStore((state) => state.updateToken);
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    const { email, username, password } = registerForm;
    e.preventDefault();
    setLoading(true);
    try {
      const res: any = await Axios.post(`/auth/register`, {
        email,
        username,
        password,
      });
      toast("successfully registered");
      console.log(res);
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
      setError("");
    }, 3000);
  };

  return (
    <AuthLayout>
      <div>
        <TextInput
          handleChange={(e: any) =>
            setRegisterForm({ ...registerForm, email: e.target.value })
          }
          value={registerForm.email}
          label="Email"
        />
        <TextInput
          handleChange={(e: any) =>
            setRegisterForm({ ...registerForm, username: e.target.value })
          }
          value={registerForm.username}
          label="Username"
        />
        <TextInput
          handleChange={(e: any) =>
            setRegisterForm({ ...registerForm, password: e.target.value })
          }
          value={registerForm.password}
          label="Password"
          name="password"
        />
      </div>
      <div>
        <Button
          loading={loading}
          text="Register"
          onClick={onSubmit}
          classname="bg-greypurple text-white"
        />
      </div>
      <div className="mt-2">
        <Link className="text-xs text-greypurple" href={"/login"}>
          Already have an account? login
        </Link>
      </div>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: error ? "#EC5757" : "#33D69F",
            color: "white",
          },
          duration: 2500,
        }}
      />
    </AuthLayout>
  );
};

export default Register;
