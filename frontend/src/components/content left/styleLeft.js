import styled from "styled-components";
import {
  colorTitle,
  colorOpActiveBg,
  colorTextOpHover,
  colorTextOption,
  colorOptionBg,
  colorTextLogo,
  colorTextOpActive,
  colorShadow,
  lightTextLogo,
} from "../variables";

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
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelLogo = styled.label`
  font-family: "Segoe UI";
  color: ${colorTextLogo};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  -webkit-text-stroke: 1px ${lightTextLogo};
  text-shadow: 0 0 5px ${lightTextLogo};
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
  color: ${colorTitle};
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
  padding-top: 5px;
`;

export const OptionLabelLine = styled.label`
  background-color: ${colorOptionBg};
  color: ${colorTextOption};
  margin: auto;
  font-size: 15px;
  padding: 3px;
  border-radius: 10px;
  min-height: 21px;
  width: 87%;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  -webkit-box-shadow: 1px 0px 5px 3px ${colorShadow};
  -moz-box-shadow: 1px 0px 5px 3px ${colorShadow};
  box-shadow: 1px 0px 5px 3px ${colorShadow};
  &:hover {
    color: ${colorTextOpHover};
  }
  &:active {
    background-color: ${colorOpActiveBg};
    color: ${colorTextOpActive};
  }
`;

export const ContentSectionCircle = styled.div`
  width: 90%;
  margin-left: 10px;
  background-color: transparent;
  border-radius: 5px;
  height: 250px;
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export var OptionLabelCircle = styled.label`
  background-color: ${colorOptionBg};
  color: ${colorTextOption};
  margin: auto 6px;
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
  -webkit-box-shadow: 1px 0px 5px 3px ${colorShadow};
  -moz-box-shadow: 1px 0px 5px 3px ${colorShadow};
  box-shadow: 1px 0px 5px 3px ${colorShadow};
  &:hover {
    color: ${colorTextOpHover};
  }
 /* &:active {
    background-color: ${colorOpActiveBg};
    color: ${colorTextOpActive};
  }*/

  ${(props) => {
    switch (props.$modClick) {
      case "click":
        return css`
          background-color: ${colorOpActiveBg};
          color: ${colorTextOpActive};
        `;
      default:
        return css`
          background-color: ${colorOptionBg};
        `;
    }
  }}
`;
