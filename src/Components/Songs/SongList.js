import React from "react";
import SongCard from "./SongCard";
import Grid from "@material-ui/core/Grid";
import Steper from "../../ReusableCompnents/Steper";

const renderSongCard = (
  filtered_songs,
  selected_songs,
  general,
  count,
  price
) => {
  if (filtered_songs.length > 0) {
    return filtered_songs.map((song, index) => {
      return (
        <SongCard
          item={song}
          key={index}
          selected_songs={selected_songs}
          general={general}
          count={count}
          price={price}
        />
      );
    });
  } else {
    return <p className="mt-3 no_title_text">No Albums Select</p>;
  }
};

const SongList = ({
  filtered_songs,
  selected_songs,
  general,
  count,
  price,
}) => {
  return (
    <Grid item xs={10}>
      <Grid container item spacing={3} className="mt-2">
        <Steper step={2} />
      </Grid>
      <Grid container item spacing={3} className="ml-1 mt-2">
        {renderSongCard(filtered_songs, selected_songs, general, count, price)}
      </Grid>
    </Grid>
  );
};

export default SongList;
