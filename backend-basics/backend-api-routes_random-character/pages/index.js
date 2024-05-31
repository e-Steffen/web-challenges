import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data: characterObject, isLoading } = useSWR(
    "/api/random-character",
    fetcher
  );

  if (isLoading) {
    return <p>We try hard to load your content...</p>;
  }

  if (!characterObject) {
    return <p>F**k, something went terribly wrong.</p>;
  }

  return (
    <>
      <h1>
        Such a pretty! Here we go: Hello, my name is {characterObject.name} and
        I feeling like {characterObject.prefix}, located at{" "}
        {characterObject.geoHash}.
      </h1>
      <Link href="/api/random-character">go to the server-side</Link>
    </>
  );
}
