import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function ListLocation() {
  const [dataJson, setdataJson] = useState([]);
  let navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(process.env.PUBLIC_URL + 'logements.json');
        const response = await fetch('/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setdataJson(jsonData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <section id="Gallery">
    <ul>
      {dataJson.map((element, index) => (
        <li key={index} onClick={() => navigate(`/logement/${element.id}`)}>
            <h3 className='title'>{element.title}</h3>
            <img id="Section1" src={element.cover} alt="Gallery cover" />
        </li>
      ))}
    </ul>
  </section>
  );
}
