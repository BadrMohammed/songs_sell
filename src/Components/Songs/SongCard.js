import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import GeneralCard from "../../ReusableCompnents/GeneralCard";
import {
  DELETE_HOME_PROPS,
  MERGE_HOME_PROPS,
  UPDATE_HOME_PROPS,
} from "../../Redux/Actions/types";

import ReactAudioPlayer from "react-audio-player";

export default function SongCard({
  item,
  selected_songs,
  general,
  count,
  price,
}) {
  const [checked, setChecked] = React.useState(false);

  const calculate_Count_Price = (type) => {
    if (type === "Added") {
      general(
        [
          { prop: "count.songs_count", value: count + 1 },
          { prop: "price.songs_price", value: price + item.price },
        ],
        UPDATE_HOME_PROPS
      );
    } else {
      general(
        [
          { prop: "count.songs_count", value: count - 1 },
          { prop: "price.songs_price", value: price - item.price },
        ],
        UPDATE_HOME_PROPS
      );
    }
  };

  const onChangeSong = () => {
    if (selected_songs.length > 0) {
      let entry = selected_songs.find((s) => s === item);

      if (entry === undefined) {
        general([{ prop: "selected_songs", value: item }], MERGE_HOME_PROPS);
        calculate_Count_Price("Added");
      } else {
        let index = selected_songs.findIndex((s) => s.id === entry.id);
        general([{ prop: "selected_songs" + "." + index }], DELETE_HOME_PROPS);
        calculate_Count_Price("Delted");
      }
    } else {
      general([{ prop: "selected_songs", value: item }], MERGE_HOME_PROPS);
      calculate_Count_Price("Added");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    onChangeSong();
    setChecked(event.target.checked);
  };

  return (
    <GeneralCard
      children={() => {
        return (
          <div>
            <div
              className="center"
              style={{
                justifyContent: "space-around",
                marginInline: "10px",
              }}
            >
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span className="paper_title">{item.name}</span>
            </div>

            <div className="center mt-3">
              <ReactAudioPlayer
                className="mt-2"
                src={item.audio}
                autoPlay={false}
                controls
                style={{ width: "100%" }}
              />
            </div>
          </div>
        );
      }}
    />
  );
}
