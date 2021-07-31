import React from "react";
import SingerList from "./SingerList";
import Statistics from "../../ReusableCompnents/Statistics";
const Singers = ({
  count,
  price,
  general,
  selected_singers,
  filtered_albums,
}) => {
  return (
    <>
      <SingerList
        general={general}
        selected_singers={selected_singers}
        filtered_albums={filtered_albums}
        count={count.singer_count}
        price={price.singer_price}
      />

      <Statistics count={count.singer_count} price={price.singer_price} />
    </>
  );
};

export default Singers;
