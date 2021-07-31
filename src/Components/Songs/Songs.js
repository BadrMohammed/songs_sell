import React from "react";
import SongList from "./SongList";
import Statistics from "../../ReusableCompnents/Statistics";
const Songs = ({ filtered_songs, selected_songs, count, price, general }) => {
  return (
    <>
      <SongList
        filtered_songs={filtered_songs}
        selected_songs={selected_songs}
        general={general}
        count={count.songs_count}
        price={price.songs_price}
      />

      <Statistics count={count.songs_count} price={price.songs_price} />
    </>
  );
};

export default Songs;
