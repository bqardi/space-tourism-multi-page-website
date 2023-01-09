import { useEffect, useState } from "react";
import { DATA_URL } from "../CONSTANTS";
import { DataProps } from "../contexts/data";

function useData() {
  const [data, setData] = useState<DataProps | null>(null);

  useEffect(() => {
    let cancelRequest = false;

    async function fetchData() {
      const response = await fetch(DATA_URL);
      const fetchedData = await response.json();
      if (cancelRequest) return;
      setData(fetchedData);
    }

    void fetchData();

    return () => {
      cancelRequest = true;
    };
  }, []);

  return data;
}

export default useData;
