// import { useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR, { SWRConfig } from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (...url) => fetch(...url).then((res) => res.json());

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  const {
    data: coords,
    error,
    isLoading,
    mutate,
  } = useSWR(URL, fetcher, { refreshInterval: 5000 });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  if (isLoading) {
    return <h1>Awaiting coordinates, please wait</h1>;
  }

  if (error) {
    return <h1>Check your network connection</h1>;
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
