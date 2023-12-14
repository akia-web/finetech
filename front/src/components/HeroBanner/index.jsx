import React, { useEffect, useState } from "react";
import './style.css'
import { selectedAction } from "../../functions/api";
import statistiqueSchneider from '../../assets/statistiques-schneider.png'
import statistiqueBitcoin from '../../assets/statistiques-bitcoins.png'
import InfoBlock from "../InfoBlock";



export default function HeroBanner() {
    if(!selectedAction){
        window.location.href = '/'
    }
    const [numberArticle, setNumberArticle] = useState(selectedAction.totalArticle);
    const [positiveArticle, setPositiveArticle] = useState(selectedAction.totalPositifArticle);
    const [negativeArticle, setNegativeArticle] = useState(selectedAction.totalNegatifArticle);

    let colorProgress;

    if (positiveArticle > negativeArticle) {
        colorProgress = 'vert';
      } else if (negativeArticle > positiveArticle) {
        colorProgress = 'rouge';
      } else {
        colorProgress = 'bleu';
      }

    const isLarge = (number, comparaison) => {
        return number > comparaison 
    }   
   
    const getStatistiqueImage = (name) =>{
        switch (name){
            case 'schneider':
                return statistiqueSchneider
            case 'bitcoin': 
                return statistiqueBitcoin
        }
    }
return (

<div className="container-page">
    
        <a href="/" className="buttonLink"> 
            <div className="flex items-center buttonLink ">
                <span className="material-symbols-outlined">arrow_back</span> <span>Retour</span>
            </div>
        </a>

    <div className="flex flex-col w-full text-center items-center">
        <h1 className="text-[93px] font-sans font-bold " >
            Flux de nouvelles
        </h1>
        <h2 className="">
        Tenez vous au courant des dernières actualités pour éclairer vos décisions
        </h2>
    </div>
   
    <div className="container-stat flex justify-between">
        <div className="flex flex-col left">
            <div className="flex flex-row items-start mb-6 ">
                <svg className={colorProgress } width="115" height="190" viewBox="0 0 115 190" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M126.969 29.875C123.688 29.875 120.914 28.7422 118.648 26.4766C116.383 24.2109 115.25 21.4375 115.25 18.1562C115.25 14.875 116.383 12.1016 118.648 9.83594C120.914 7.57031 123.688 6.4375 126.969 6.4375C130.25 6.4375 133.023 7.57031 135.289 9.83594C137.555 12.1016 138.688 14.875 138.688 18.1562C138.688 21.4375 137.555 24.2109 135.289 26.4766C133.023 28.7422 130.25 29.875 126.969 29.875ZM126.969 184.562C123.688 184.562 120.914 183.43 118.648 181.164C116.383 178.898 115.25 176.125 115.25 172.844C115.25 169.562 116.383 166.789 118.648 164.523C120.914 162.258 123.688 161.125 126.969 161.125C130.25 161.125 133.023 162.258 135.289 164.523C137.555 166.789 138.688 169.562 138.688 172.844C138.688 176.125 137.555 178.898 135.289 181.164C133.023 183.43 130.25 184.562 126.969 184.562ZM164.469 62.6875C161.188 62.6875 158.414 61.5547 156.148 59.2891C153.883 57.0234 152.75 54.25 152.75 50.9688C152.75 47.6875 153.883 44.9141 156.148 42.6484C158.414 40.3828 161.188 39.25 164.469 39.25C167.75 39.25 170.523 40.3828 172.789 42.6484C175.055 44.9141 176.188 47.6875 176.188 50.9688C176.188 54.25 175.055 57.0234 172.789 59.2891C170.523 61.5547 167.75 62.6875 164.469 62.6875ZM164.469 151.75C161.188 151.75 158.414 150.617 156.148 148.352C153.883 146.086 152.75 143.312 152.75 140.031C152.75 136.75 153.883 133.977 156.148 131.711C158.414 129.445 161.188 128.312 164.469 128.312C167.75 128.312 170.523 129.445 172.789 131.711C175.055 133.977 176.188 136.75 176.188 140.031C176.188 143.312 175.055 146.086 172.789 148.352C170.523 150.617 167.75 151.75 164.469 151.75ZM178.531 107.219C175.25 107.219 172.477 106.086 170.211 103.82C167.945 101.555 166.812 98.7812 166.812 95.5C166.812 92.2188 167.945 89.4453 170.211 87.1797C172.477 84.9141 175.25 83.7812 178.531 83.7812C181.812 83.7812 184.586 84.9141 186.852 87.1797C189.117 89.4453 190.25 92.2188 190.25 95.5C190.25 98.7812 189.117 101.555 186.852 103.82C184.586 106.086 181.812 107.219 178.531 107.219ZM96.5 189.25C83.5312 189.25 71.3438 186.789 59.9375 181.867C48.5312 176.945 38.6094 170.266 30.1719 161.828C21.7344 153.391 15.0547 143.469 10.1328 132.062C5.21094 120.656 2.75 108.469 2.75 95.5C2.75 82.5312 5.21094 70.3438 10.1328 58.9375C15.0547 47.5312 21.7344 37.6094 30.1719 29.1719C38.6094 20.7344 48.5312 14.0547 59.9375 9.13281C71.3438 4.21094 83.5312 1.75 96.5 1.75V20.5C75.5625 20.5 57.8281 27.7656 43.2969 42.2969C28.7656 56.8281 21.5 74.5625 21.5 95.5C21.5 116.438 28.7656 134.172 43.2969 148.703C57.8281 163.234 75.5625 170.5 96.5 170.5V189.25ZM96.5 114.25C91.3438 114.25 86.9297 112.414 83.2578 108.742C79.5859 105.07 77.75 100.656 77.75 95.5C77.75 94.7188 77.7891 93.8984 77.8672 93.0391C77.9453 92.1797 78.1406 91.3594 78.4531 90.5781L59 71.125L72.125 58L91.5781 77.4531C92.2031 77.2969 93.8438 77.0625 96.5 76.75C101.656 76.75 106.07 78.5859 109.742 82.2578C113.414 85.9297 115.25 90.3438 115.25 95.5C115.25 100.656 113.414 105.07 109.742 108.742C106.07 112.414 101.656 114.25 96.5 114.25Z" />
                </svg>
                <div className="flex flex-col justify-end height-100">
                    <p className="numberArticle">{numberArticle}</p>
                    <p>Nombre d’articles en 24h</p>
                    
                </div>
            </div>
            <div className="flex flex-row items-center justify-center width-100">
                <div className={`circle flex justify-center items-center negative mr-2 ${isLarge(negativeArticle, positiveArticle) === true ? 'active' : 'non-active'}`} >
                    {negativeArticle}
                    <br />
                    Negatifs
                </div>
                <div className={`circle flex justify-center  positive items-center ${isLarge(positiveArticle, negativeArticle) === true? 'active' : 'non-active'}`}>
                    {positiveArticle}
                    <br />
                    Positifs
                </div>
            </div>
        </div>

        <div className="right flex justify-center">
            <img src={getStatistiqueImage(selectedAction.name)} alt="" />
        </div>
    </div>
  
  <h2 className="title">Dernieres actualités</h2>
  {selectedAction.articles.map((list) => (
        <InfoBlock time={list.time} title={list.title} link={list.link} />
    ))}
   
</div>
 

)
}