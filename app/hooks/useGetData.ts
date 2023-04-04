import { useState, useEffect } from "react";
import { Data } from "../projects/data";

export default function useGetData(): Data[] {

  async function getData(): Promise<Data[]> {
    const res = await fetch(
      "https://api.github.com/users/albertoferrandez/repos",
      {cache: 'no-store'}
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const repos = await getData();
      setData(repos);
    };
    fetchData();
  }, []);

  const projects = data.filter(d => d.name !== 'albertoferrandez')

  return projects
}
