import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import PagesNav from "../PagesNav";

export default function VolumeTwoWowers() {
  const volume = volumes.find((volume) => volume.slug === "the-two-towers");

  return (
    <section>
      <Link href="../">Back to Overview</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.title}, {book.ordinal}
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={140}
        // layout="responsive"
        alt="a picture connencted to the lord of rings"
      />
      <PagesNav currentPage={volume.slug}/>
    </section>
  );
}
