import React from "react";
import AlbumCard from "./AlbumCard";
import Grid from "@material-ui/core/Grid";
import Steper from "../../ReusableCompnents/Steper";

const renderAlbumItem = (
  selected_albums,
  general,
  filtered_songs,
  filtered_albums,
  count,
  price
) => {
  if (filtered_albums.length > 0) {
    return filtered_albums.map((item, index) => {
      return (
        <AlbumCard
          key={index}
          item={item}
          general={general}
          selected_albums={selected_albums}
          filtered_songs={filtered_songs}
          count={count}
          price={price}
        />
      );
    });
  } else {
    return <p className="mt-3 no_title_text">No Singers Select</p>;
  }
};
const AlbumList = ({
  selected_albums,
  filtered_songs,
  general,
  filtered_albums,
  count,
  price,
}) => {
  return (
    <Grid item xs={10}>
      <Grid container item spacing={3} className="mt-2">
        <Steper step={1} />
      </Grid>
      <Grid container item spacing={3} className="ml-1 mt-2">
        {renderAlbumItem(
          selected_albums,
          general,
          filtered_songs,
          filtered_albums,
          count,
          price
        )}
      </Grid>
    </Grid>
  );
};

export default AlbumList;
