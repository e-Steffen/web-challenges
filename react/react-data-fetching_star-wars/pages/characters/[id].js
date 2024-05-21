import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...url) => fetch(...url).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const URL = `https://swapi.dev/api/people/${id}`;
  const { data: character, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>await characters, please wait</h1>;
  }

  if (error) {
    return <h1>an error occurred</h1>;
  }

  return (
    <Layout>
      <Card
        id={id}
        name={character.name}
        height={character.height}
        eyeColor={character.eye_color}
        birthYear={character.birth_year}
      />
    </Layout>
  );
}
