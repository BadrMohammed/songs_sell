import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { UPDATE_HOME_PROPS } from "../Redux/Actions/types";
import { showNotificationMessage } from "./GeneralFunctions";

const handleDragStart = (e) => e.preventDefault();

const validateForm = (userForm, selected_songs) => {
  if (selected_songs.length === 0) {
    showNotificationMessage("no songs selected", "error");
  } else {
    if (Object.entries(userForm).find((v) => v[1] === "")) {
      showNotificationMessage("please complete your data", "error");
    } else {
      return true;
    }
  }
};

const onSubmit = (e, userForm, selected_songs, general, history) => {
  if (validateForm(userForm, selected_songs) === true) {
    e.preventDefault();
    window.scrollTo(0, 0);

    general(
      [
        { prop: "active_page", value: 0 },
        { prop: "paying_songs", value: selected_songs },
        { prop: "selected_singers", value: [] },
        { prop: "filtered_albums", value: [] },
        { prop: "selected_albums", value: [] },
        { prop: "filtered_songs", value: [] },
        { prop: "selected_songs", value: [] },
        {
          prop: "count",
          value: { songs_count: 0, album_count: 0, singer_count: 0 },
        },
        {
          prop: "price",
          value: { songs_price: 0, album_price: 0, singer_price: 0 },
        },
        { prop: "userForm", value: { name: "", email: "", mobile: "" } },
      ],
      UPDATE_HOME_PROPS
    );

    showNotificationMessage("Purchased successfully", "success");
    history.push("/");
  }
};

const Carousel = ({
  pages,
  active_page,
  general,
  userForm,
  selected_songs,
  history,
}) => {
  const onChangeSlide = (e) => {
    general([{ prop: "active_page", value: e.slide }], UPDATE_HOME_PROPS);
    window.scrollTo(0, 0);
  };
  const renderItems = () => {
    let items = [];

    pages().map((page) => {
      return items.push(
        <Grid
          container
          item
          xs={12}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          onDragStart={handleDragStart}
        >
          {page}
        </Grid>
      );
    });

    return items;
  };

  console.log(active_page);

  return (
    <AliceCarousel
      mouseTracking={false}
      activeIndex={active_page}
      items={renderItems()}
      controlsStrategy="alternate"
      autoHeight={true}
      disableDotsControls={true}
      onSlideChanged={onChangeSlide}
      renderPrevButton={() => (
        <Button variant="contained" className="care_btn">
          Back
        </Button>
      )}
      renderNextButton={() =>
        active_page === 3 ? (
          <Button
            variant="contained"
            className="care_btn"
            onClick={(e) =>
              onSubmit(e, userForm, selected_songs, general, history)
            }
          >
            Submit
          </Button>
        ) : (
          <Button variant="contained" className="care_btn">
            Next
          </Button>
        )
      }
    />
  );
};

export default Carousel;
