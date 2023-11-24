"use client"; // Error components must be Client Components
import { useEffect } from "react";
import BackBtn from "@/components/BackBtn";
import "../../../../css/custom.css";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="Error">
      <h1>Oops!</h1>
      <p>{error.message}</p>
      {/* Attempt to recover by trying to re-render the segment */}
      <button className="Error-TryAgain-btn" onClick={() => reset()}>Try again</button>
      <br />
      <br />
      <BackBtn />
    </div>
  );
}
