import React from "react";

export default function Card(props) {
  return (
    <div className="cardMedicine">
      <label className="nameMedicine">{props.nameTitle}</label>
      <p className="description">{props.description}</p>
      <div className="alertMedicine">
        <label className="subtitle">{props.name1}: </label>
        <label className="chipAlert">{props.contentName1}</label>
      </div>
      <div className="chipAlertMedicine">
        <label className="subtitle">{props.name2}: </label>
        <label className="chipAlert">{props.contentName2}</label>
      </div>
      <div className="chipAlertMedicine">
        <label className="subtitle">{props.name3}: </label>
        <label className="chipAlert">{props.contentName3}</label>
      </div>
    </div>
  );
}
