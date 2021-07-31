import React from "react";
import AlbumList from "./AlbumList";
import Statistics from "../../ReusableCompnents/Statistics";
const Albums = ({
  selected_albums,
  filtered_songs,
  count,
  price,
  general,
  filtered_albums,
}) => {
  return (
    <>
      <AlbumList
        filtered_albums={filtered_albums}
        selected_albums={selected_albums}
        filtered_songs={filtered_songs}
        general={general}
        count={count.album_count}
        price={price.album_price}
      />

      <Statistics count={count.album_count} price={price.album_price} />
    </>
  );
};

export default Albums;
