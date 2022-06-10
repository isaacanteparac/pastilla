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

const dataSick = [
  { name: "glucosa" },
  { name: "resfriado" },
  { name: "covid 19" },
  { name: "viruela del mono" },
  { name: "glucosa" },
  { name: "resfriado" },
  { name: "covid 19" },
  { name: "viruela del mono" },
  { name: "glucosa" },
  { name: "resfriado" },
  { name: "covid 19" },
  { name: "viruela del mono" },
  { name: "glucosa" },
  { name: "resfriado" },
  { name: "covid 19" },
  { name: "viruela del mono" },
];

export default function AllChips(props) {
  const [pains, setPains] = useState([]);
  const [sicks, setSicks] = useState([]);

  const getPains = () => {
    //const data = "url"
    setPains(data);
  };

  const getSicks = () => {
    setSicks(dataSick);
  };

  useEffect(() => {
    getSicks();
    getPains();
  });

  return (
    <>
      <div className="sectionPains">
        <label className="TitleSection">{props.nameSection1}</label>
        <div className="contentChips">
          {sicks?.map((sick) => (
            <Chip namePain={sick.name} />
          ))}
        </div>
      </div>
      <div className="sectionPains">
        <label className="TitleSection">{props.nameSection2}</label>
        <div className="contentChips">
          {pains?.map((pain) => (
            <Chip namePain={pain.name} />
          ))}
        </div>
      </div>
    </>
  );
}
