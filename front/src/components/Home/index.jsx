import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar';
import Info  from '../Info';
import './style.css'
import ImageSchneider from '../../assets/schneider.png'
import { getActions } from '../../functions/api'

export default function Home() {
    const [listData, setListData] = useState([]);
    const url =  'http://127.0.0.1:8080/articles'
    useEffect(() => {
        getActions(url).then((res) => {
          setListData(res);
        });
      }, []);
      useEffect(() => {
        console.log(listData);
    }, [listData]); 


    return (
        <div>
            <div className="header">
                <NavBar />
             </div>
            <div className='container-list-actions'>
                <h1>Flux de nouvelles</h1>
                <h2>Actions avec de nouveaux articles</h2>

                {listData.map((list) => (
                   <div className='logo'> 
                   <img src={ImageSchneider} alt="" />
               </div>
                ))}
            </div>
            <div>
                <Info />
            </div> 
         
        </div>
    )

}