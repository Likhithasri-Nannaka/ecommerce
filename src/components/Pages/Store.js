import { Fragment } from "react";
import Body from "../Layout/Body";

const Store = () => {
  return (
    <Fragment>
      <p
        className="display-5 text-center p-3 bg-secondary mt-1 text-white"
        style={{ fontSize: "6em", fontFamily: "bold", width: "100%" }}
      >
        The Generics
      </p>
      <Body />
    </Fragment>
  );
};

export default Store;
