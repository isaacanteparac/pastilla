import React, {useState, useEffect } from 'react'

const dataOption = [
    {id:1, name:"ginecologo"},
    {id:2, name:"dermatologo"},
    {id:3, name:"pediatra"},
    {id:4, name:"huesos"}
]

export default function Doctor() {
    const [optionSearch, setOptionSearch] = useState([]);
    const [search, setSearch] = useState([]);
    

    const contentSearch = () => {
        const url = "fetch question";
    }

    useEffect(() => {
        contentSearch()
    });

    return (
      <div>Doctor</div>
    )
}
