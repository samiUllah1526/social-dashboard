import React from "react";
import style from "./Header.module.scss";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

export function Header() {
  return (
    <div className={style["space-around"]}>
      <div className={style["center"]}>
        <DoneIcon />
        <CloseIcon />
      </div>
      <div className={style["center"]}>
        <CloseIcon /> <span>Turn</span>
      </div>
      <div className={style["center"]}>
        {" "}
        <RotateLeftIcon /> <span>Reset</span>
      </div>
    </div>
  );
}
