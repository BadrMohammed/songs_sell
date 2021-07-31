import swal from "sweetalert";
import { _songs } from "./Data/_songs";
import {
  MERGE_HOME_PROPS,
  DELETE_HOME_PROPS,
  UPDATE_HOME_PROPS,
} from "../Redux/Actions/types";
import { _albums } from "./Data/_albums";
export const showNotificationMessage = (title, type) => {
  swal(title, "", type);
};

export const onChoose_Singer_Or_Album = (
  array,
  array_prop,
  depend_array,
  depend_array_prop,
  item,
  general,
  id,
  type,
  count,
  price
) => {
  let filtered_Array = [];
  if (type === "singer") {
    filtered_Array = _albums.filter((alb) => alb[id] === item.id);
    filtered_Array.forEach(function (f) {
      f.singer_name = item.name;
    });
  } else {
    filtered_Array = _songs.filter((alb) => alb[id] === item.id);
    filtered_Array.forEach(function (f) {
      f.album_name = item.name;
    });
  }

  if (array.length > 0) {
    let entry = array.find((t) => t === item);

    if (entry === undefined) {
      general(
        [
          { prop: array_prop, value: item },
          { prop: depend_array_prop, value: filtered_Array },
        ],
        MERGE_HOME_PROPS
      );
      calculate_Total_Count_Price(item, type, "added", count, price, general);
    } else {
      let index = array.findIndex((x) => x.id === entry.id);
      general([{ prop: array_prop + "." + index }], DELETE_HOME_PROPS);

      let filtered_depend_prop = depend_array.filter(
        (d) => d.singer_id !== item.id
      );

      general(
        [{ prop: depend_array_prop, value: filtered_depend_prop }],
        UPDATE_HOME_PROPS
      );
      calculate_Total_Count_Price(item, type, "deleted", count, price, general);
    }
  } else {
    general(
      [
        { prop: array_prop, value: item },
        { prop: depend_array_prop, value: filtered_Array },
      ],
      MERGE_HOME_PROPS
    );
    calculate_Total_Count_Price(item, type, "added", count, price, general);
  }
};

const calculateValue = (action_type, count, price, songs) => {
  let newCount = 0;
  let newPrice = 0;
  if (action_type === "added") {
    newCount = count + songs.length;
    newPrice =
      price +
      songs.map((item) => item.price).reduce((prev, curr) => prev + curr, 0);
  } else {
    newCount = count - songs.length;

    newPrice =
      price -
      songs.map((item) => item.price).reduce((prev, curr) => prev + curr, 0);
  }

  return { newCount, newPrice };
};

export const calculate_Total_Count_Price = (
  item,
  type,
  action_type,
  count,
  price,
  general
) => {
  let newPrice = 0;
  let newCount = 0;
  if (type === "singer") {
    let songs = [];
    let filter_album = _albums.filter((a) => a.singer_id === item.id);

    filter_album.map((alb) => {
      let filter_song = _songs.filter((s) => s.album_id === alb.id);
      if (filter_song.length > 0) {
        songs = songs.concat(filter_song);
      }
    });
    if (songs.length > 0) {
      let entry = calculateValue(action_type, count, price, songs);
      newCount = entry.newCount;
      newPrice = entry.newPrice;
    }
    general(
      [
        { prop: "count.singer_count", value: newCount },
        { prop: "price.singer_price", value: newPrice },
      ],
      UPDATE_HOME_PROPS
    );
  }

  if (type === "album") {
    let filter_songs = _songs.filter((a) => a.album_id === item.id);
    if (filter_songs.length > 0) {
      let entry = calculateValue(action_type, count, price, filter_songs);
      newCount = entry.newCount;
      newPrice = entry.newPrice;
    }
    general(
      [
        { prop: "count.album_count", value: newCount },
        { prop: "price.album_price", value: newPrice },
      ],
      UPDATE_HOME_PROPS
    );
  }
};
