import React, { useEffect, useState } from 'react';
import './style.css';
import ImageSchneider from '../../assets/schneider.png';
import { getActions, selectedAction, setSelectedAction } from '../../functions/api';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [listData, setListData] = useState([]);
  const url = 'http://127.0.0.1:8080/articles';

  useEffect(() => {
    getActions(url).then((res) => {
      setListData(res);
    });
  }, []);

  useEffect(() => {
    console.log(listData);
  }, [listData]);

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

        {listData.map((list) => (
          <div className='logo' key={list.name} onClick={() => handleClick(list)}>
            <img src={ImageSchneider} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
}
