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
            <p className="mb-2 text-lg font-bold text-slate-600">Body: <span className="font-medium text-slate-400">{post.body}</span></p>
            <p className="text-base font-medium text-slate-400">Tags : <span className="flex flex-row items-center gap-4 text-slate-700">{post.tags.map((tag: any) => (
              <span key={tag} className="rounded-lg bg-slate-700 px-2 py-1 text-white">{tag}</span>
            ))}</span></p>
          </div>
        ))}
      </div>
    )
};

export default Page;
