import styled from "styled-components";
import {
  colorComponent,
  colorNameMedicine,
  colorTextDescriptionMedicine,
  colorTextSubtitle,
  colorTextChip,
  colorShadow,
} from "../variables";

export const DivCenter = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  left: 20%;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
`;

export const CardMedicineDiv = styled.div`
  background-color: ${colorComponent};
  width: 45%;
  margin: auto;
  padding: 15px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 25px;
  -webkit-box-shadow: 1px 0px 5px 3px ${colorShadow};
  -moz-box-shadow: 1px 0px 5px 3px ${colorShadow};
  box-shadow: 1px 0px 5px 3px ${colorShadow};
`;

export const TitleMedicine = styled.label`
  color: ${colorNameMedicine};
  font-weight: 700;
  font-size: 18px;
  font-family: "Segoe UI";
  text-transform: capitalize;
`;

export const Description = styled.p`
  color: ${colorTextDescriptionMedicine};
  font-family: "Segoe UI";
  font-size: 14px;
  background-color: transparent;
  margin: 10px 0;
  height: 140px;
  overflow: scroll;
  overflow-x: hidden;
`;

export const ChipAlertMedicine = styled.div`
  margin: 10px 0;
`;

export const Subtitle = styled.label`
  color: ${colorTextSubtitle};
  font-family: "Segoe UI";
  text-transform: capitalize;
`;

export const ChipAlert = styled.label`
  background-color: transparent;
  color: ${colorTextChip};
  font-family: "Segoe UI";
  border-radius: 10px;
  padding: 0;
`;
