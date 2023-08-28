"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useStore } from "../../hooks/useStore";
import Home from "./Home";

const Index = () => {
  const token = localStorage.getItem("token");
  const { push } = useRouter();

  if (!token) {
    localStorage.removeItem("token");
    push("/login");
  }
  return <Home />;
};

export default Index;
