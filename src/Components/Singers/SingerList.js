import React from "react";
import SingerCard from "./SingerCard";
import Grid from "@material-ui/core/Grid";
import Steper from "../../ReusableCompnents/Steper";
import { _singers } from "../../ReusableCompnents/Data/_singers";
const renderSinger = (
  general,
  selected_singers,
  filtered_albums,
  count,
  price
) => {
  return _singers.map((singer, index) => {
    return (
      <SingerCard
        general={general}
        key={index}
        item={singer}
        selected_singers={selected_singers}
        filtered_albums={filtered_albums}
        count={count}
        price={price}
      />
    );
  });
};

const SingerList = ({
  general,
  selected_singers,
  filtered_albums,
  count,
  price,
}) => {
  return (
    <Grid item xs={10}>
      <Grid container item spacing={3} className="mt-2">
        <Steper step={0} />
      </Grid>

      <Grid container item spacing={3} className="ml-1 mr-1 mt-2">
        {renderSinger(general, selected_singers, filtered_albums, count, price)}
      </Grid>
    </Grid>
  );
};

export default SingerList;
