// this file is for exercising purpose only

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Head from "next/head";
import styled from "styled-components";

export default function AllesUeben() {
  const router = useRouter();

  const arrayOfCities = [
    "Berlin",
    "Stockholm",
    "Halle",
    "Dakar",
    "Sydney",
    "Tokyo",
  ];
  const [firstCity, secondCity, thirdCity, ...allOtherCities] = arrayOfCities;
  const moreCities = [...arrayOfCities, "Barcelona", "Kiew", "Bonn"];
  console.log(moreCities);
  const objectOfCities = [
    {
      id: 1,
      name: "Berlin",
      facts: {
        inhabitants: 3850000,
        located: "Europe",
      },
    },

    {
      id: 2,
      name: "Dakar",
      facts: {
        inhabitants: 1200000,
        located: "Africa",
      },
    },
  ];

  const { id, name, inhabitants, located } = objectOfCities;
  function showCities(named, ...moreInfos) {
    console.log("the name is ", named + " and the rest is: ", moreInfos);
  }

  showCities(objectOfCities[0].name, "ABC", "CDF", "XYZ");
  //   const idsOfCities = objectOfCities[0].id;
  //   const namesOfCities = objectOfCities.map((city) => {
  //     return city;
  //   });

  function handleClick(array) {
    const randomVolume = array[Math.floor(Math.random() * array.length)];
    router.push(`/volumes/${randomVolume.slug}`);
  }

  const hello = <p>Hello, hello again.</p>;

  let isFavorite;
  function setisFavorite(status) {
    if (status === true) {
      isFavorite = true;
    } else isFavorite = false;
  }

  setisFavorite(false);

  return (
    <>
      <Head>
        <title>Exercise</title>
      </Head>
      {hello}
      <ul>
        <li>
          <StyledLink href="http://www.github.com">Link A</StyledLink>
        </li>
        <li>
          <StyledLink href="https://developer.mozilla.org/en-US/">
            Link B
          </StyledLink>
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
      <div>
        <StyledLink href="https://de.wikipedia.org/wiki/Stockholm">
          {secondCity}
        </StyledLink>
      </div>
      <ul>
        {" "}
        {objectOfCities.map((city) => (
          <li key={city.id}>
            <StyledLink href={`https://de.wikipedia.org/wiki/${city.name}`}>
              {city.name}
            </StyledLink>
          </li>
        ))}
        <li key={arrayOfCities}>{`${allOtherCities}`}</li>
      </ul>
      <div>{isFavorite ? <span>👍</span> : <span>😟</span>}</div>
    </>
  );
}

const StyledLink = styled(Link)`
  color: brown;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: darkgoldenrod;
  }
`;
