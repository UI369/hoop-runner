import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Season from "./Season";
import { SeasonType } from "../types";

const SeasonView: React.FC = () => {
  const { seasonId } = useParams<{ seasonId: string }>();
  const [season, setSeason] = useState<SeasonType | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/seasons/${seasonId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((season) => {
        console.log("SeasonView season:", season);
        setSeason(season);
      })
      .catch((error) => console.error("Error fetching season:", error));
  }, []);

  return (
    <div>
      {season ? (
        <>
          <Season id={season.id} season={season} viewMode="detailed" />
        </>
      ) : null}
    </div>
  );
};

export default SeasonView;
