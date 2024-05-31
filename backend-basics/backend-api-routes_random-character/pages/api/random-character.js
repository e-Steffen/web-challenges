import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    name: chance.twitter(),
    geoHash: chance.geohash({ length: 7 }),
    prefix: chance.prefix(),
  };

  //   response.end(
  //     `Hello, my name is ${character.name} and I feeling like ${character.prefix}, located at ${character.geoHash}.`
  //   );
  response.status(200).json(character);
}
