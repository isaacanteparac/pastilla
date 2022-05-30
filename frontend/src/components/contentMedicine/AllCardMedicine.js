import React, { useState, useEffect } from "react";
import CardMedicine from "./CardMedicine";

const data = [
  {
    name: "tu no metes cabra saramam biche",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    age: "50 a 60",
    weight: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
  {
    name: "hola mundo moderno",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    age: "50 a 60",
    weight: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
  {
    name: "rata vieja",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    age: "50 a 60",
    weight: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
  {
    name: "nomo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    age: "50 a 60",
    weight: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
  {
    name: "hola mundo moderno",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    age: "50 a 60",
    weight: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
  {
    name: "rata vieja",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    age: "50 a 60",
    weight: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
  {
    name: "nomo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    age: "50 a 60",
    weight: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
  {
    name: "hola mundo moderno",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    age: "50 a 60",
    weight: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
  {
    name: "rata vieja",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    age: "50 a 60",
    weight: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
];

export default function AllCardMedicine(props) {
  const [medicines, setMedicines] = useState([]);
  const getMedicines = () => {
    //const data = "url backend";
    setMedicines(data);
  };

  useEffect(() => {
    getMedicines();
  });
  return (
    <div className="sectionMedicine">
      <label className="TitleSection">{props.nameSection}</label>
      <div className="contentCard">
        {medicines?.map((medicine) => (
          <CardMedicine
            nameMedicine={medicine.name}
            description={medicine.description}
            age={medicine.age}
            weight={medicine.weight}
            levelPain={medicine.levelPain}
          />
        ))}
      </div>
    </div>
  );
}
