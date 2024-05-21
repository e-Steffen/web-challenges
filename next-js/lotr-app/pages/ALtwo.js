import { useState } from "react";
import useSWR from "swr";

const fetcher = (...url) => fetch(...url).then((res) => res.json());

export default function BadJoke() {
  const [jokeId, setJokeId] = useState(0);
  const {
    data: joke,
    error,
    isLoading,
  } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${jokeId}`,
    fetcher
  );

  if (isLoading) {
    return <h1>Searching for bad joke</h1>;
  }

  if (error) {
    return <h1>No more jokes: an error occurred.</h1>;
  }

  if (!joke) {
    return <h1>No more jokes: an error occurred.</h1>;
  }

  function getRandomJokeId() {
    const randomJokeId = Math.floor(Math.random() * 12);
    setJokeId(randomJokeId);
  }

  return (
    <>
      <button type="button" onClick={getRandomJokeId}>
        Get a random joke!
      </button>
      <h2>{joke.joke}</h2>
    </>
  );
}
