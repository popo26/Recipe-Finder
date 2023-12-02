"use client"; 
import { useEffect } from "react";
import BackBtn from "@/components/BackBtn";
import "../../../css/custom.css";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="Error">
      <h1>Oops!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()} className="Error-TryAgain-btn">
        Try again
      </button>
      <br />
      <br />
      <BackBtn />
    </div>
  );
}
