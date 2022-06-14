import React from "react";
import {
  CardMedicineDiv,
  Description,
  TitleMedicine,
  ChipAlertMedicine,
  Subtitle,
  ChipAlert,
} from "./styleCenter";

export default function Card(props) {
  return (
    <CardMedicineDiv>
      <TitleMedicine>{props.nameTitle}</TitleMedicine>
      <Description>{props.description}</Description>
      <ChipAlertMedicine>
        <Subtitle>{props.name1}: </Subtitle>
        <ChipAlert>{props.contentName1}</ChipAlert>
      </ChipAlertMedicine>
      <ChipAlertMedicine>
        <Subtitle>{props.name2}: </Subtitle>
        <ChipAlert>{props.contentName2}</ChipAlert>
      </ChipAlertMedicine>
      <ChipAlertMedicine>
        <Subtitle>{props.name3}: </Subtitle>
        <ChipAlert>{props.contentName3}</ChipAlert>
      </ChipAlertMedicine>
    </CardMedicineDiv>
  );
}
