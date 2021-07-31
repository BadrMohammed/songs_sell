import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import GeneralCard from "../../ReusableCompnents/GeneralCard";
import { onChoose_Singer_Or_Album } from "../../ReusableCompnents/GeneralFunctions";

export default function SingerCard({
  general,
  item,
  selected_singers,
  filtered_albums,
  count,
  price,
}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setChecked(event.target.checked);

    onChoose_Singer_Or_Album(
      selected_singers,
      "selected_singers",
      filtered_albums,
      "filtered_albums",
      item,
      general,
      "singer_id",
      "singer",
      count,
      price
    );
  };

  return (
    <GeneralCard
      children={() => {
        return (
          <>
            <div className="content_container">
              <span className="paper_title">{item.name}</span>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>

            <div className="img_container">
              <img src={item.image} alt="" className="full_image" />
            </div>
          </>
        );
      }}
    />
  );
}
