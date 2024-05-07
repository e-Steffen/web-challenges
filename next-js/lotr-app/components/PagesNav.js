import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";

export default function PagesNav() {
  const router = useRouter();

  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === router.query.slug
  );

  const currentVolume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!currentVolume) {
    return null;
  }

  return (
    <>
      <div>
        {previousVolume ? (
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        ) : null}
      </div>
      <div>
        {nextVolume ? (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        ) : null}
      </div>
    </>
  );
}
