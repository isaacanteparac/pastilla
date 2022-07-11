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
  IconArrowBottom_
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
  const [word, setword] = useState({
    alphabet: "",
    symptom: "",
    fpharmaceutical: "",
    tmatter: "",
    analgesic: "",
    sales: "",
    tpharma: "",
  });
  const [getContent, setGetContent] = useState(true);
  const [symptomList, setSymptomsList] = useState([]);
  const [fPharmaceuticalList, setFfPharmaceuticalList] = useState([]);
  const [salesList, setSalesList] = useState([]);
  const [typePharmaList, setTypePharmaList] = useState([]);
  const [typeMatterList, setTypeMatterList] = useState([]);

  const openContent = () => {
    if (getContent) {
      setGetContent(false);
    } else {
      setGetContent(true);
    }
  };

  return (
    <DivLeft>
      <DivLogo>
        <LabelLogo>Pastilla</LabelLogo>
      </DivLogo>
      <ContentLeftD>
        {/*Busca un síntoma por su letra inicial*/}
        <Section>
          <div onClick={openContent}>
            <TitleSection>
              Busca un síntoma por su letra inicial
            </TitleSection>
            <IconArrowBottom_ />
          </div>

          {getContent ? (
            <ContentSectionCircle>
              {alphabet?.map((letter) => (
                <OptionLabelCircle
                  key={letter.id}
                  onClick={() => {
                    setword({ alphabet: letter.name });
                    openContent();
                  }}
                >
                  {letter.name}
                </OptionLabelCircle>
              ))}
            </ContentSectionCircle>
          ) : null}
        </Section>
        {/*Busca un síntoma por su letra seleccionada*/}
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
        {/*tipo de analgesico(pastilla, inyeccion, suero,etc*/}
        <Section>
          <TitleSection>Tipo de analgesicos</TitleSection>
          <ContentSection>
            {fPharmaceuticalList?.map((analgesic) => (
              <OptionLabelLine
                key={analgesic.id}
                onClick={() => {
                  setword({ analgesic: analgesic.name });
                }}
              >
                {analgesic.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
        {/*formas de ventas*/}
        <Section>
          <TitleSection>Formas de ventas</TitleSection>
          <ContentSection>
            {salesList?.map((sales) => (
              <OptionLabelLine
                key={sales.id}
                onClick={() => {
                  setword({ sales: sales.name });
                }}
              >
                {sales.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
        {/*formas farmaceuticAS(orales, nasales,etc) seleccion orales*/}
        <Section>
          <TitleSection>Formas de farmaceuticas</TitleSection>
          <ContentSection>
            {fPharmaceuticalList?.map((pharmaceuticalList) => (
              <OptionLabelLine
                key={pharmaceuticalList.id}
                onClick={() => {
                  setword({ fpharmaceutical: pharmaceuticalList.name });
                }}
              >
                {pharmaceuticalList.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
        {/*tipo de formas farmaceuticAS material(solido, liquido, semisolido) seleccion solido*/}
        <Section>
          <TitleSection>Tipo {word.fpharmaceutical}</TitleSection>
          <ContentSection>
            {typeMatterList?.map((matter) => (
              <OptionLabelLine
                key={matter.id}
                onClick={() => {
                  setword({ tmatter: matter.name });
                }}
              >
                {matter.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
        {/*tipo de farmaco(solido, oral) selecion tableta*/}
        <Section>
          <TitleSection>Tipo farmaco</TitleSection>
          <ContentSection>
            {typePharmaList?.map((pharma) => (
              <OptionLabelLine
                key={pharma.id}
                onClick={() => {
                  setword({ tpharma: pharma.name });
                }}
              >
                {pharma.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
         {/*tipo de (capsula dura eetc))*/}
         <Section>
          <TitleSection>Medicamentos {word.pharma}</TitleSection>
          <ContentSection>
            {typePharmaList?.map((pharma) => (
              <OptionLabelLine
                key={pharma.id}
                onClick={() => {
                  setword({ tpharma: pharma.name });
                }}
              >
                {pharma.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
      </ContentLeftD>
    </DivLeft>
  );
}
