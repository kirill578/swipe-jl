import React from "react";

export type Person = {
  id: string;
  name: string;
  imgsrc?: string;
  party?: string;
  y: number;
  n: number;
};

const overrideHost = new URLSearchParams(window.location.search).get('host');

const host = overrideHost !== null ? overrideHost : "http://34.67.21.85:8000";

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const usePeople = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<boolean>(false);
  const [people, setPeople] = React.useState<Person[] | undefined>(undefined);

  React.useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const response = await fetch(host + "/api/v1/lj/");
        setPeople(shuffleArray((await response.json()) as Person[]));
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };
    load();
  }, []);

  return React.useMemo(
    () => ({
      people,
      isLoading,
      isError,
    }),
    [people, isLoading, isError]
  );
};

export const useVote = () => {
    return {
      voteYes: (id: string) => fetch(host + "/api/v1/lj/vote_y/" + id),
      voteNo: (id: string) => fetch(host + "/api/v1/lj/vote_n/" + id),
    }
};