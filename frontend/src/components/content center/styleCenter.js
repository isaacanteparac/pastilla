import styled from "styled-components";

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
  background-color: #171313;
  width: 45%;
  margin: auto;
  padding: 15px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;

  
`;

export const TitleMedicine = styled.label`
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Segoe UI';
  text-transform: capitalize;
  `;

export const Description  = styled.p`
  color: #C6C1C1;
  font-family: 'Segoe UI';
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
  color: #fff;
  font-family: 'Segoe UI';
  font-weight: 500;
  text-transform: capitalize;
`;

export const ChipAlert = styled.label`
  background-color: #f95287;
  color: #fff;
  font-family: 'Segoe UI';
  font-weight: 500;
  border-radius: 10px;
  padding: 0 5px;
`
