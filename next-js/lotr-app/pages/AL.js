// this file is for exercising purpose only

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Head from "next/head";

export default function AllesUeben() {
  const router = useRouter();

  function handleClick(array) {
    const randomVolume = array[Math.floor(Math.random() * array.length)];
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <Head>
        <title>Exercise</title>
      </Head>
      <ul>
        <li>
          <Link href="http://www.github.com">Link A</Link>
        </li>
        <li>
          <Link href="https://developer.mozilla.org/en-US/">Link B</Link>
        </li>
        <ul>
          {volumes.map(({ slug, title, cover }) => (
            <li key={slug}>
              <h2>{title}</h2>
              <Image src={cover} height={200} width={100} alt="picture" />
            </li>
          ))}
        </ul>

        <div>
          <Image
            src="/images/the-two-towers.png"
            alt="a picture"
            height={144}
            width={100}
          />
        </div>
      </ul>
      <div>
        <button type="button" onClick={() => handleClick(volumes)}>
          Im here to be clicked, I kick you somewhere else
        </button>
      </div>
    </>
  );
}
