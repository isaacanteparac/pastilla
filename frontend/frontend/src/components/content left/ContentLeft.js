import React, { useState, useEffect } from "react";


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
  IconArrowBottom_,
} from "./styleLeft";

export default function ContentLeft() {
  const [getContent, setGetContent] = useState(true);
  const [symptomList, setSymptomsList] = useState([]);
  const [salesList, setSalesList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [fPharmaceuticalList, setFfPharmaceuticalList] = useState([]);
  const [stateMatterList, setStateMatterList] = useState([]);
  const [typePharmaList, setTypePharmaList] = useState([]);
  const [alphabet, setAlphabet] = useState([]);

  //var
  const [id_alphabetSymptom, setId_alphabetSymptom] = useState(0);

  const [word, setword] = useState({
    alphabet: "",
    symptom: "",
    fpharmaceutical: "",
    tmatter: "",
    analgesic: "",
    sales: "",
    tpharma: "",
  });

  const openContent = () => {
    if (getContent) {
      setGetContent(false);
    } else {
      setGetContent(true);
    }
  };

  const alphabetSymptom = (s) =>{
    setId_alphabetSymptom(s);
    console.log(id_alphabetSymptom);
  }

  const getDataAlphabet = async () => {
    fetch("http://127.0.0.1:5000/i/ctlg/alphabet")
      .then((res) => res.json())
      .then((data) => setAlphabet(data));
  };

  const getDataSymptom = async () => {
    //poner el id
    const url =
      "http://127.0.0.1:5000/i/ctlg/symptom/" +id_alphabetSymptom;
      console.log(url);
      console.log(id_alphabetSymptom);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSymptomsList(data);
      });
  };
  const getDataSales = async () => {
    fetch("http://127.0.0.1:5000/i/ctlg/sales")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSalesList(data);
      });
  };
  const getDataRecipe = async () => {
    fetch("http://127.0.0.1:5000/i/ctlg/recipe")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipeList(data);
      });
  };

  const getDataPharmaceuticalForms = async () => {
    fetch("http://127.0.0.1:5000/i/ctlg/pharmaceutical+forms")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFfPharmaceuticalList(data);
      });
  };

  const getDataStateMatter = async () => {
    fetch("http://127.0.0.1:5000/i/ctlg/state+matter")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStateMatterList(data);
      });
  };

  const getDatatypePharma = async () => {
    fetch("http://127.0.0.1:5000/i/ctlg/state+matter")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTypePharmaList(data);
      });
  };

  useEffect(() => {
    getDataAlphabet();
    getDataSymptom();
    getDataSales();
    getDataRecipe();
    getDataPharmaceuticalForms();
    getDataStateMatter();
  },[]);

  return (
    <DivLeft>
      <DivLogo>
        <LabelLogo>Pastilla</LabelLogo>
      </DivLogo>
      <ContentLeftD>
        {/*Busca un síntoma por su letra inicial*/}
        <Section>
          <div onClick={openContent}>
            <TitleSection>Busca un síntoma por su letra inicial</TitleSection>
            <IconArrowBottom_ />
          </div>

          {getContent ? (
            <ContentSectionCircle>
              {alphabet?.map((letter) => (
                <OptionLabelCircle
                  key={letter.id}
                  onClick={(e) => {
                    setword({ alphabet: letter.name });
                    alphabetSymptom(letter.id);
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

        <div>
        <Section>
          <TitleSection>Sintomas con la letra {word.alphabet}</TitleSection>
          <ContentSection>
            {symptomList?.map((symptom) => (
              <OptionLabelLine key={symptom.id}>{symptom.name}</OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
        {/*formas de ventas*/}
        <Section>
          <TitleSection>Tipo de ventas</TitleSection>
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
        {/*formas de recié*/}
        <Section>
          <TitleSection>Tipo de receta</TitleSection>
          <ContentSection>
            {recipeList?.map((recipe) => (
              <OptionLabelLine
                key={recipe.id}
                onClick={() => {
                  setword({ sales: recipe.name });
                }}
              >
                {recipe.name}
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

        {/*tipo de analgesico(pastilla, inyeccion, suero,etc*/}
        <Section>
          <TitleSection>Tipo de material</TitleSection>
          <ContentSection>
            {stateMatterList?.map((matter) => (
              <OptionLabelLine
                key={matter.id}
                onClick={() => {
                  setword({ analgesic: matter.name });
                }}
              >
                {matter.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>

        {/*tipo de formas farmaceuticAS material(solido, liquido, semisolido) seleccion solido*/}
        <Section>
          <TitleSection>Tipo farmaco</TitleSection>
          <ContentSection>
            {typePharmaList?.map((pharma) => (
              <OptionLabelLine
                key={pharma.id}
                onClick={() => {
                  setword({ tmatter: pharma.name });
                }}
              >
                {pharma.name}
              </OptionLabelLine>
            ))}
          </ContentSection>
        </Section>
        </div>
      </ContentLeftD>
    </DivLeft>
  );
}
