"use client";
import React from "react";
import useSWR from "swr";

const Dashboard = () => {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts",
  //   fetcher
  // );

  // console.log(data);
  return (
    <div>
      <h1>Dashboard page</h1>
    </div>
  );
};

export default Dashboard;
