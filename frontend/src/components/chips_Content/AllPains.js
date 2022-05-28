import React, { useState, useEffect } from "react";
import Chip from "./Chip";

const data = [
  { name: "hola" },
  { name: "rafffta" },
  { name: "hola" },
  { name: "rata" },
  { name: "hola" },
  { name: "rata" },
  { name: "holfdfda" },
  { name: "ratffffa" },
  { name: "holdddda" },
  { name: "hola mundo moderno" },
  { name: "hola mundo moderno" },
];

export default function AllPains(props) {
  const [pains, setPains] = useState([]);

  const getPains = () => {
    //const data = "url"
    setPains(data);
  };
  useEffect(() => {
    getPains();
  });

  return (
    <div className="sectionPains">
      <label className="TitleSection">{props.nameSection}</label>
      <div className="contentChips">
        {pains?.map((pain) => (
          <Chip namePain={pain.name} />
        ))}
      </div>
    </div>
  );
}
