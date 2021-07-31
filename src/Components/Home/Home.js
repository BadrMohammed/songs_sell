import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../ReusableCompnents/Header";
import Carousel from "../../ReusableCompnents/Carousel";
import Singers from "../Singers/Singers";
import Albums from "../Albums/Albums";
import Songs from "../Songs/Songs";
import Users from "../Users/Users";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/index";

class Home extends Component {
  renderPages = () => {
    const {
      selected_singers,
      selected_albums,
      selected_songs,
      count,
      price,
      userForm,
      general,
      filtered_albums,
      filtered_songs,
    } = this.props;
    let pages = [];
    pages.push(
      <Singers
        selected_singers={selected_singers}
        filtered_albums={filtered_albums}
        count={count}
        price={price}
        general={general}
      />,
      <Albums
        filtered_albums={filtered_albums}
        selected_albums={selected_albums}
        filtered_songs={filtered_songs}
        count={count}
        price={price}
        general={general}
      />,
      <Songs
        filtered_songs={filtered_songs}
        selected_songs={selected_songs}
        count={count}
        price={price}
        general={general}
      />,
      <Users
        userForm={userForm}
        count={count}
        price={price}
        general={general}
      />
    );
    return pages;
  };
  render() {
    const { selected_songs, general, active_page, userForm, history } =
      this.props;
    return (
      <div className="page_container">
        <Grid container spacing={1}>
          <Header />
          <Carousel
            pages={this.renderPages}
            selected_songs={selected_songs}
            general={general}
            active_page={active_page}
            userForm={userForm}
            history={history}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ HomeR }) => {
  return {
    selected_singers: HomeR.selected_singers,
    selected_albums: HomeR.selected_albums,
    filtered_albums: HomeR.filtered_albums,
    selected_songs: HomeR.selected_songs,
    filtered_songs: HomeR.filtered_songs,
    count: HomeR.count,
    price: HomeR.price,
    userForm: HomeR.userForm,
    active_page: HomeR.active_page,
  };
};

export default connect(mapStateToProps, actions)(Home);
