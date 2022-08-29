import React, { useState, useEffect } from "react";
import Card from "./Card";
import { DivCenter } from "./styleCenter";

const data = [

  {
    name: "hola mundo moderno",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    age: "50 a 60",
    weight: "50 a 150",
    levelPain: "4 a 5 de 10",
    id:5
  },
];

export default function ContentCenter() {
  const [medicines, setMedicines] = useState([]);

  const getMedicines = () => {
    //const data = "url backend";
    setMedicines(data);
  };



  useEffect(() => {
    getMedicines();
  });
  return (
    <DivCenter>
           {medicines?.map((medicine) => (
          <Card key={medicine.id}
            nameTitle={medicine.name}
            description={medicine.description}
            name1="edad"
            contentName1={medicine.age}
            name2="peso"
            contentName2={medicine.weight}
            name3="peso"
            contentName3={medicine.levelPain}
          />
        ))}
    </DivCenter>
  );
}
