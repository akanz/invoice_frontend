"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
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
      const res: any = await Axios.post(`${base_url}/auth/register`, {
        email,
        username,
        password,
      });
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
        {error?.length > 0 && <Message text={error} type="error" />}
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
    </AuthLayout>
  );
};

export default Register;
