import React from "react";

const User = ({ btnConfig }: any) => {
  return (
    <div>
      <p>Get user details</p>
      <button onClick={btnConfig.onClick}>get user</button>
    </div>
  );
};

export default User;
