import React, { useEffect, useState } from 'react';
import './style.css';
import ImageSchneider from '../../assets/schneider.png';
import logoBitcoin from '../../assets/bitcoin.png'
import { getActions, selectedAction, setSelectedAction } from '../../functions/api';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [listData, setListData] = useState([]);
  const [affiche, setAffiche] = useState(false)
  const url = 'http://127.0.0.1:8080/articles';

  useEffect(() => {
    getActions(url).then((res) => {
      setListData(res);
    });
  }, []);

  useEffect(() => {
    console.log(listData);
    setAffiche(true)
  }, [listData]);

  const getLogo = (name) =>{
    switch (name){
      case 'bitcoin':
        return logoBitcoin
      case 'schneider':
        return ImageSchneider
    }
    
  }
  const navigate = useNavigate(); // Utilisez useNavigate en dehors de la fonction de rendu

  const handleClick = (list) => {
    setSelectedAction(list)
    navigate(`/${list.name}`);
  };

    return (
        <div>
          <div className='container-list-actions'>
            <h1>Flux de nouvelles</h1>
            <h2>Actions avec de nouveaux articles</h2>


          {affiche ? (
            <div className='flex'>
              {listData.map((list) => (
                <div className='logo' key={list.name} onClick={() => handleClick(list)}>
                  <img src={getLogo(list.name)} alt='' />
                </div>
              ))}
            </div>
              ) : (
                <p>En attente...</p>
              )}
     
          </div>
        </div>
  );
}
