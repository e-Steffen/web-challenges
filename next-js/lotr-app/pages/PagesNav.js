import { volumes } from "@/lib/data";
import Link from "next/link";

export default function PagesNav({ currentPage }) {
  let content;

  if (currentPage === "the-two-towers") {
    content = (
      <>
        <Link href="/volumes/the-fellowship-of-the-ring">
          ↢ previous volume
        </Link>
        <p></p>
        <Link href="/volumes/the-return-of-the-king">next volume ↣ </Link>
      </>
    );
  } else if (currentPage === "the-fellowship-of-the-ring") {
    content = (
      <>
        <Link href="/volumes/the-two-towers">next volume ↣ </Link>
      </>
    );
  } else {
    content = <Link href="/volumes/the-two-towers"> ↢ previous volume</Link>;
  }

  return <div key={currentPage}>{content}</div>;
}
