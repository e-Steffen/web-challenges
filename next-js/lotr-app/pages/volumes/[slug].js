import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import PagesNav from "../../components/PagesNav";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Volume() {
  const router = useRouter();
  //   console.log(router);

  const { slug } = router.query; /* Der Name des Abfrageparameters entspricht 
  immer dem Namen der Datei/des Verzeichnisses: [slug].js → const { slug } = router.query; */

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books } = currentVolume;

  function getRandomVolume(array) {
    const randomVolume = array[Math.floor(Math.random() * array.length)];
    router.push(`/volumes/${randomVolume.slug}`);
  }



  return (
    <section>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="../">Back to Overview</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => (
          <li key={book.ordinal}>
            {book.title}, {book.ordinal}
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        height={230}
        width={140}
        // layout="responsive"
        alt="a picture connencted to the lord of rings"
      />
      <p></p>
      <button type="button" onClick={() => getRandomVolume(volumes)}>
        Random choice
      </button>

      <PagesNav />
    </section>
  );
}
