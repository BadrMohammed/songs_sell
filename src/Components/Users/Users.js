import React from "react";
import UserForm from "./UserForm";
import Statistics from "../../ReusableCompnents/Statistics";
const Users = ({ userForm, count, price, general }) => {
  return (
    <>
      <UserForm general={general} userForm={userForm} />

      <Statistics count={count.songs_count} price={price.songs_price} />
    </>
  );
};

export default Users;
