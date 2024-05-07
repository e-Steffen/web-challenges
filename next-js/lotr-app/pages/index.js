import Link from "next/link";
import { volumes } from "@/lib/data";
import { introduction } from "@/lib/data";
import Head from "next/head";
import { useRouter } from "next/router";

console.log(volumes[0].title);
export default function Overview() {
  const router = useRouter();
  function getRandomVolume(array) {
    const randomVolume = array[Math.floor(Math.random() * array.length)];
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>

      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>

      <button type="button" onClick={() => getRandomVolume(volumes)}>
        Random choice
      </button>
      <p>
        <Link href={`/AL`}>📚 personal AL-Page 🙇‍♂️</Link>
      </p>
    </>
  );
}
