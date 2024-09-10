"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/loading";

const Page = () => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/posts/1");
      return response.data;
    };

      const { isLoading, data, error } = useQuery({
          queryKey: ['repoData'],
          queryFn: fetchData
      })

      // if the data is loading, show the loading component
      if (isLoading) return <Loading />;

      // if there is an error, show an error message
      if (error) return <div>Failed to load</div>;

    return (
      <div>
        <p className='text-2xl font-bold text-blue-500'>{data.title}</p>
        <p className='text-2xl font-bold text-slate-500'>{data.body}</p>
      </div>
    )
};

export default Page;
