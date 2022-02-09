import React from "react";
import style from "./Stats.module.scss";
export function Stats() {
  return (
    <>
      <div className={`${style["stats"]} text-level-2`}>
        <div className={`${style["card"]} ${style["player1"]}`}>
          <div>X(You)</div>
          <div style={{ fontWeight: "bold" }}>14</div>
        </div>
        <div className={`${style["card"]} ${style["ties"]}`}>
          <div>Ties</div>
          <div style={{ fontWeight: "bold" }}>32</div>
        </div>
        <div className={`${style["card"]} ${style["player2"]}`}>
          <div>O(CPU)</div>
          <div style={{ fontWeight: "bold" }}>11</div>
        </div>
      </div>
    </>
  );
}
