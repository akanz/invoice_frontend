"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useStore } from "../../hooks/useStore";
import Home from "./Home";

const Index = () => {
  const { push } = useRouter();

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  if (!token && typeof window !== "undefined") {
    localStorage.removeItem("token");
    push("/login");
  }
  return <Home />;
};

export default Index;
