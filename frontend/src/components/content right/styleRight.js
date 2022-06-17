import styled from "styled-components";

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
  background-color: #171313;
  border-radius: 10px;
  margin: auto;
  width: 85%;
  height: 150px;
  overflow: hidden;
  padding: 5px;
  margin-top: 10px;
`;

export const DivInputMedicalRecord = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelInput = styled.label`
  font-family: "Segoe UI";
 
  color: #FAFAFA;
  margin-right: 5px;
`;

export const InputMedicalRecord = styled.input`
  width: 150px;
  border: none;
  font-family: "Segoe UI";
  background-color: transparent;
  border-bottom: 1px solid #b4b6b7;
  position: relative;
  bottom: 2px;
  color: #00ff80;
`;

export const DivButton = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonSent = styled.button`
  margin: auto;
  background-color:#8000ff;
  border-radius: 10px;
  font-family: "Segoe UI";
  font-weight: 500;
  font-size: 15px;
  color: #fff;
  width: 80%;
  height: 30px;
  border: none;

  &:active {
    background-color:#10C86C;
  }
`;

export const DivDoctor = styled.div`
  background-color: #171313;
  margin: 15px 0;
  border-radius: 10px;
  padding: 5px;
`;

export const NameDoctor = styled.label`
  color: #feff00;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 16px;
`;

export const DivInfoDoctor = styled.div`
  margin: 10px 0;
  margin-left: 3px;
`;

export const NameOptionDoctor = styled.label`
  color: #b4b6b7;
  margin-right: 8px;
`;
