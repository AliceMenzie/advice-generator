import React from "react";
import { useQuery } from "react-query";
import divider from './assets/images/pattern-divider-desktop.svg'


export default function Advice() {
  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    return response.json();
  }

  const { data, isError, error, isLoading, refetch } = useQuery(
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
    <div className="advice-container">
      <div className="content"><p className="identification">Advice #{data.slip.id}</p>
      <p className="quote">"{data.slip.advice}"</p></div>
      <div className="images">
        <img src={divider} alt="" /> 
      </div>
      <button className="btn-container" onClick={refetch}></button>
    </div>
  );
}
