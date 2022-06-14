import styled from "styled-components";

export const DivLeft = styled.div`
  background-color: transparent;
  width: 20%;
  height: 100%;
  overflow-y: scroll;
  margin-right: 2px;
  position: fixed;
  padding-top: 10px;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const DivLogo = styled.div`
  background: transparent;
  width: 95%;
  margin: auto;
`;

export const LabelLogo = styled.label`
  font-family: "Segoe UI";
  color: #7052f9;
  font-weight: bold;
  font-size: 30px;
`;

export const ContentLeftD = styled.div`
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

export const TitleSection = styled.label`
  color:#52caf9;
  font-size: 20px;
  font-weight: 500;
`;

export const ContentSection = styled.div`
  width: 90%;
  margin-left: 10px;
  background-color: transparent;
  border-radius: 5px;
  height: 155px;
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 10px;
`;

export const OptionLabelLine = styled.label`
  background-color: #171313;
  color: #b4b6b7;
  margin: auto;
  font-size: 15px;
  padding: 3px;
  border-radius: 5px;
  min-height: 21px;
  width: 87%;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;
  &:hover {
    color: #ffffff;
  }
  &:active {
    background-color: #004cfe;
    color: #ffffff;
  }
`;

export const ContentSectionCircle = styled.div`
  width: 90%;
  margin-left: 10px;
  background-color: transparent;
  border-radius: 5px;
  height: 150px;
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionLabelCircle = styled.label`
  background-color: #232121;
  color: #b4b6b7;
  margin: auto 3px;
  font-size: 20px;
  padding: 2px;
  border-radius: 10px;
  min-height: 30px;
  width: 30px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #ffffff;
  }
  &:active {
    background-color: #004cfe;
    color: #ffffff;
  }
`;
