import React, { useState, useEffect } from "react";
import {
  DivRight,
  Section,
  ContentRightD,
  ContentSection,
} from "./styleRight";

import {TitleSection} from "../content left/styleLeft";

import MedicalRecord from "./MedicalRecord";
import Doctor from "./Doctor";

const data = [
  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },
  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },
  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },
  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },
  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },
  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },
  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },
  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },
  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },
  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },
  {
    id: 1,
    name: "isaac antepara",
    area: "ginecologo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    phone: "+536 648 588 6845",
    email: "hola@gmail.com",
  },
];

export default function ContentRight(props) {
  const [doctors, setDoctors] = useState([]);

  const getDoctor = () => {
    setDoctors(data);
  };

  useEffect(() => {
    getDoctor();
  });

  return (
    <DivRight>
      <ContentRightD>
        <Section>
          <TitleSection>Ficha medica</TitleSection>
          <MedicalRecord />
        </Section>
        <Section>
          <TitleSection>Buscar medico por especialidad</TitleSection>
          <ContentSection>
            {doctors?.map((doctor) => (
              <Doctor
                nameDoctor={doctor.name}
                description={doctor.description}
                name1="Especialidad"
                contentName1={doctor.area}
                name2="Telefono"
                contentName2={doctor.phone}
                name3="Email"
                contentName3={doctor.email}
              />
            ))}
          </ContentSection>
        </Section>
      </ContentRightD>
    </DivRight>
  );
}
