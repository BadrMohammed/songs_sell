import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import GeneralCard from "../../ReusableCompnents/GeneralCard";
import { onChoose_Singer_Or_Album } from "../../ReusableCompnents/GeneralFunctions";

export default function AlbumCard({
  item,
  general,
  selected_albums,
  filtered_songs,
  count,
  price,
}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    onChoose_Singer_Or_Album(
      selected_albums,
      "selected_albums",
      filtered_songs,
      "filtered_songs",
      item,
      general,
      "album_id",
      "album",
      count,
      price
    );
    setChecked(event.target.checked);
  };

  return (
    <GeneralCard
      children={() => {
        return (
          <div
            style={{
              backgroundImage: "linear-gradient(to left,#2c1a1a)",
              height: "120px",
            }}
          >
            <div
              style={{
                height: "100%",
              }}
              className="text-center"
            >
              <br />
              <div>
                <p className="paper_title">{item.singer_name}</p>
              </div>
              <div className="content_container">
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <span className="paper_title">{item.name}</span>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
