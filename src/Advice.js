import React from "react";
import { useQuery } from "react-query";

export default function Advice() {
  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    return response.json();
  }

  const { data, isError, error, isLoading } = useQuery(
    "advice",
    () => fetchAdvice(),
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error}</p>
      </>
    );

  return (
    <div>
      {data.slip.id}
      {data.slip.advice}
    </div>
  );
}
