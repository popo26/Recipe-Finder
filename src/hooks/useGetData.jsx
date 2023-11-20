import { useState, useEffect } from "react";

export default function useGetData(url) {
  const [data, setData] = useState("");
  useEffect(() => {
    let ignore = false;
    if (url) {
      fetch(url, {
        method:"GET",
        mode:'cors'
      })
        .then((response) => response.json())
        .then((result) => {
          if (!ignore) {
            setData(result);
          }
        })
        .catch((error) => console.error(error.message));
      return () => {
        ignore = true;
      };
    }
  }, [url]);
  return data;
}
