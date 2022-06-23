import styled from "styled-components";
import {
  colorComponent,
  colorTextRecordMedicine,
  colorBorderInput,
  colorTextInput,
  colorButtonBg,
  colorTextButton,
  colorButtonActiveBg,
  colorTextInfoDoctor,
  colorTextDoctor,
  colorShadow,
} from "../variables";

export const DivRight = styled.div`
  background-color: transparent;
  height: 585px;
  width: 20%;
  height: 100%;
  overflow-y: scroll;
  margin-right: 2px;
  position: fixed;
  left: 80%;
  bottom: 0px;
`;

export const ContentRightD = styled.div`
  width: 95%;
  margin: auto;
  background-color: transparent;
  border-radius: 10px;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const ContentSection = styled.div`
  width: 90%;
  margin-left: 10px;
  background-color: transparent;
  border-radius: 5px;
  height: 155px;
  margin-top: 10px;
`;

export const MedicalRecordD = styled.div`
  background-color: ${colorComponent};
  border-radius: 10px;
  margin: auto;
  width: 85%;
  height: 150px;
  overflow: hidden;
  padding: 5px;
  margin-top: 10px;
  -webkit-box-shadow: 1px 0px 5px 3px ${colorShadow};
  -moz-box-shadow: 1px 0px 5px 3px ${colorShadow};
  box-shadow: 1px 0px 5px 3px ${colorShadow};
`;

export const DivInputMedicalRecord = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelInput = styled.label`
  font-family: "Segoe UI";
  color: ${colorTextRecordMedicine};
  margin-right: 5px;
`;

export const InputMedicalRecord = styled.input`
  width: 150px;
  border: none;
  font-family: "Segoe UI";
  background-color: transparent;
  border-bottom: 1px solid ${colorBorderInput};
  position: relative;
  bottom: 2px;
  color: ${colorTextInput};
`;

export const DivButton = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonSent = styled.button`
  margin: auto;
  background-color: ${colorButtonBg};
  border-radius: 10px;
  font-family: "Segoe UI";
  font-weight: 500;
  font-size: 15px;
  color: ${colorTextButton};
  width: 80%;
  height: 30px;
  border: none;

  &:active {
    background-color: ${colorButtonActiveBg};
  }
`;

export const DivDoctor = styled.div`
  background-color: ${colorComponent};
  margin: 15px 0;
  border-radius: 10px;
  padding: 5px;
  -webkit-box-shadow: 1px 0px 5px 3px ${colorShadow};
  -moz-box-shadow: 1px 0px 5px 3px ${colorShadow};
  box-shadow: 1px 0px 5px 3px ${colorShadow};
`;

export const NameDoctor = styled.label`
  color: ${colorTextDoctor};
  text-transform: capitalize;
  font-weight: bold;
  font-size: 17px;
`;

export const DivInfoDoctor = styled.div`
  margin: 10px 0;
  margin-left: 3px;
`;

export const NameOptionDoctor = styled.label`
  color: ${colorTextInfoDoctor};
  margin-right: 8px;
`;
