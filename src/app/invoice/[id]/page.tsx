"use client";
import PageLoading from "@/components/alerts/PageLoading";
import InvoiceComp from "@/components/InvoiceComp";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useStore } from "../../../../hooks/useStore";
import { instance } from "../../../../utils/axios";
import InvoiceLayout from "../layout";

const Page = ({ params }: { params: { id: string } }) => {
  const getInvoice = async () => {
    const res = await instance.get(`/invoice/${params.id}`);
    return res.data;
  };
  // Queries
  const { data, isLoading, isError }: any = useQuery({
    queryKey: [`invoice/${params.id}`],
    queryFn: getInvoice,
  });

  if (isLoading) {
    return <PageLoading />;
  }
  return <InvoiceComp data={data} />;
};

export default Page;
