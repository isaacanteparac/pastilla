import React, { useState, useEffect } from "react";
import { DivDoctor, NameDoctor, NameOptionDoctor, LabelInput, DivInfoDoctor } from "./styleRight";

export default function Doctor(props) {
  return (
    <DivDoctor>
      <NameDoctor>🧑‍⚕️{props.nameDoctor}</NameDoctor>
      <DivInfoDoctor>
        <NameOptionDoctor>{props.name1}:</NameOptionDoctor>
        <LabelInput>{props.contentName1}</LabelInput>
      </DivInfoDoctor>
      <DivInfoDoctor>
        <NameOptionDoctor>{props.name2}:</NameOptionDoctor>
        <LabelInput>{props.contentName2}</LabelInput>
      </DivInfoDoctor>
      <DivInfoDoctor>
        <NameOptionDoctor>{props.name3}:</NameOptionDoctor>
        <LabelInput>{props.contentName3}</LabelInput>
      </DivInfoDoctor>
    </DivDoctor>
  );
}
