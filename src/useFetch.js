import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setIsPending(true);

    //{ signal: abortCont.signal }
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("unable to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch Aborted");
        }
        setError(err.message);
        setIsPending(false);
      });

    // return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default UseFetch;
