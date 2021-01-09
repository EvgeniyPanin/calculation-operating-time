import React from "react";
import style from "./Container.module.css";
import Paper from "@material-ui/core/Paper";

const Container = ({ children }) => {
  return <Paper elevation={3} className={style.container}>{children}</Paper>;
};

export default Container;
