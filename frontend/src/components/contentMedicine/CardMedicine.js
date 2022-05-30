import React from "react";

export default function CardMedicine(props) {
  return (
    <div className="cardMedicine">
      <label className="nameMedicine">{props.nameMedicine}</label>
      <p className="description">{props.description}</p>
      <div className="alertMedicine">
        <label className="subtitle">Edad: </label>
        <label className="chipAlert">{props.age}</label>
      </div>
      <div className="chipAlertMedicine">
        <label className="subtitle">Peso: </label>
        <label className="chipAlert">{props.weight}</label>
      </div>
      <div className="chipAlertMedicine">
        <label className="subtitle">Nivel Dolor: </label>
        <label className="chipAlert">{props.levelPain}</label>
      </div>
      <div className="contentBtnDoctor">
        <button className="btnDoctor">Consultar a medico</button>
      </div>
    </div>
  );
}
