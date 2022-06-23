import React, { useState } from "react";

import {
  DivLeft,
  DivLogo,
  LabelLogo,
  ContentLeftD,
  Section,
  TitleSection,
  ContentSection,
  OptionLabelLine,
  OptionLabelCircle,
  ContentSectionCircle,
} from "./styleLeft";

const alphabet = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
  { id: 5, name: "e" },
  { id: 6, name: "f" },
  { id: 7, name: "g" },
  { id: 8, name: "h" },
  { id: 9, name: "i" },
  { id: 10, name: "j" },
  { id: 11, name: "k" },
  { id: 12, name: "l" },
  { id: 13, name: "m" },
  { id: 14, name: "n" },
  { id: 15, name: "o" },
  { id: 16, name: "p" },
  { id: 17, name: "q" },
  { id: 18, name: "r" },
  { id: 19, name: "s" },
  { id: 20, name: "t" },
  { id: 21, name: "u" },
  { id: 22, name: "v" },
  { id: 23, name: "w" },
  { id: 24, name: "x" },
  { id: 25, name: "y" },
  { id: 26, name: "z" },
];

export default function ContentLeft() {
  const [word, setword] = useState({ alphabet: "", symptom:"", fpharmaceutical: "", sales:"" });
  const [symptomList, setSymptomsList] = useState([]);
  const [fPharmaceuticalList, setFfPharmaceuticalList] = useState([]);
  const [salesList, setSalesList] = useState([]);

  return (
    <DivLeft>
      <DivLogo>
        <LabelLogo>Pastilla</LabelLogo>
      </DivLogo>
      <ContentLeftD>
        <Section>
          <TitleSection>Busca un síntoma por su letra inicial</TitleSection>
          <ContentSectionCircle>
            {alphabet?.map((letter) => (
              <OptionLabelCircle
                key={letter.id}
                onClick={() => {
                  setword({ alphabet: letter.name });
                }}
              >
                {letter.name}
              </OptionLabelCircle>
            ))}
          </ContentSectionCircle>
        </Section>
        <Section>
          <TitleSection>Sintomas con la letra {word.alphabet}</TitleSection>
          <ContentSection>
            {symptomList?.map((symptom) => (
              <OptionLabelLine
                key={symptom.id}
                onClick={() => {
                  setword({ alphabet: symptom.name });
                }}
              >
                {symptom.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
        <Section>
          <TitleSection>Tipo de analgesicos</TitleSection>
          <ContentSection>
            {fPharmaceuticalList?.map((pharmaceutical) => (
              <OptionLabelLine
                key={pharmaceutical.id}
                onClick={() => {
                  setword({ fpharmaceutical: pharmaceutical.name });
                }}
              >
                {pharmaceutical.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
        <Section>
          <TitleSection>Formas de ventas</TitleSection>
          <ContentSection>
            {salesList?.map((sales) => (
              <OptionLabelLine key={sales.id}  onClick={() => {
                setword({ sales: sales.name });
              }}>
                {sales.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
        <Section>
          <TitleSection>Formas de farmaceuticas</TitleSection>
          <ContentSection>
            {fPharmaceuticalList?.map((pharmaceuticalList) => (
              <OptionLabelLine key={pharmaceuticalList.id}  onClick={() => {
                setword({ fpharmaceutical: pharmaceuticalList.name });
              }}>
                {pharmaceuticalList.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
        <Section>
          <TitleSection>Tipo {word.fpharmaceutical}</TitleSection>
          <ContentSection>
            <OptionLabelLine>
              dolor en articulaciones dolor en articulaciones dolor en
              articulaciones
            </OptionLabelLine>
          </ContentSection>
        </Section>
      </ContentLeftD>
    </DivLeft>
  );
}
