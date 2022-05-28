import React, { useState, useEffect } from "react";
import CardMedicine from "./CardMedicine";

const data = [
  {
    name: "hola",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ages: "50 a 60",
    weights: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
  {
    name: "nomo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ages: "50 a 60",
    weights: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
  {
    name: "hola mundo moderno",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ages: "50 a 60",
    weights: "50 a 150",
    levelPain: "4 a 5 de 10",
  },
  {
    name: "rata vieja",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ages: "50 a 60",
    weights: "50 a 150",
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
    <div>
      <label className="TitleSection">{props.nameSection}</label>
      <div>
            {medicines?.map((medicine)=>(
                <CardMedicine/>
            ))}
      </div>
    </div>
  );
}
