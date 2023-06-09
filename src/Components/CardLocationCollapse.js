import React, { useState} from 'react';
import arrowUp from "../Assets/Main/Vector(6).png";
import arrowDown from "../Assets/Main/Vector(7).png";

export default function CardLocationCollapse({ Data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleCollapse = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
    setIsOpen(!isOpen);
  };

  return (
    <ul className="CardLocationCollapse">
      <li onClick={() => toggleCollapse(0)}>
        <span>Description</span>
        <img src={isOpen && activeItem === 0 ? arrowUp : arrowDown} alt=""/>
        
      </li>
      {activeItem === 0 && (
          <div id='descriptions'>
            <span>{Data.description}</span>
          </div>
        )}
      <li onClick={() => toggleCollapse(1)}>
        <span>Equipement</span>
        <img src={isOpen && activeItem === 1 ? arrowUp : arrowDown} alt=""/>
        
      </li>
      {activeItem === 1 && 
          <ul id='equipments'>
            {Data.equipments.map((element, index) => (
              <li key={index} className={`equipment${index}`}>
                {element}
              </li>
            ))}
          </ul>
        }
    </ul>
  );
}
