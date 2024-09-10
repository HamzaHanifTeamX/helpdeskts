"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/loading";

const Page = () => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/posts/");
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
      <div className="p-5">
        {data?.posts.map((post: any) => (
          <div key={post.id} className="mb-3 rounded-lg bg-slate-300 px-5 py-3 shadow">
            <h1 className="text-2xl font-bold text-slate-900">Title: <span className="text-slate-700">{post.title}</span></h1>
            <p className="text-lg font-bold text-slate-600">Body: <span className="font-medium text-slate-400">{post.body}</span></p>
          </div>
        ))}
      </div>
    )
};

export default Page;
