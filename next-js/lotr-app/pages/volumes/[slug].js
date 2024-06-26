import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import PagesNav from "../../components/PagesNav";
import { useRouter } from "next/router";
import Head from "next/head";
import styled, { css } from "styled-components";
import StyledComponentX from "@/components/StyledComponentX";

export default function Volume() {
  const router = useRouter();
  //   console.log(router);

  const { slug } = router.query; /* Der Name des Abfrageparameters entspricht 
  immer dem Namen der Datei/des Verzeichnisses: [slug].js → const { slug } = router.query; */

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books, color } = currentVolume;

  function getRandomVolume(array) {
    const randomVolume = array[Math.floor(Math.random() * array.length)];
    router.push(`/volumes/${randomVolume.slug}`);
    console.log(color);
  }

  const StyledPage = styled.body`
    background-color: ${color};
  `;

  const MegaButton = styled.button`
    ${({ $needFat }) => {
      if ($needFat === "fat") {
        return `border: 10px solid orange`;
      } else {
        return `border: none`;
      }
    }}
  `;

  return (
    <StyledPage>
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
      <MegaButton
        $needFat="fat"
        type="button"
        onClick={() => getRandomVolume(volumes)}
      >
        Random choice
      </MegaButton>
      <StyledComponentX cover={cover} alt={title} />
      <PagesNav />
    </StyledPage>
  );
}
