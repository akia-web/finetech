import React, { useEffect, useState } from "react";
// import React from 'react';
import './style.css'



export default function HeroBanner() {
    const [numberArticle, setNumberArticle] = useState(1);
    const [positiveArticle, setPositiveArticle] = useState(1);
    const [negativeArticle, setNegativeArticle] = useState(0);
   
   
return (
<div className="flex flex-col justify-between gap-24 w-full items-start hero text-center">
    <div className="flex flex-col gap-5 w-full text-center items-center">
        <div id="FluxDeNouvelles" className="text-[93px] font-sans font-bold text-[#131722]" >
            Flux de nouvelles{" "}
        </div>
        <div className="text-4xl font-sans text-[#131722]">
            Lorem ipsum dolor sit amet consectetur. Neque lorem magna nullam a.
        </div>
    </div>
    <div className="flex flex-row justify-between w-full items-start mb-0 mr-0">
        <div className="flex flex-col mt-[141px] gap-10 w-2/5 items-start">
            <div className="relative flex flex-row w-full items-start">
                <div id="NombreDarticlesEnH"
                    className="text-right text-3xl font-sans text-[#131722] absolute top-[177px] left-32 h-10 w-[356px] mt-2">
                    Nombre d’articles en 24h
                </div>
                <div
                    className="text-right text-[150px] font-sans font-black text-[#2962ff] absolute top-5 left-24 h-[176px] w-[349px]">
                    {numberArticle}
                </div>
                <img src="https://file.rendit.io/n/PIqfOB0RPYNjPdv1yTrx.svg" alt="AvForward5 icon" id="Avgpace"
                    className="relative" />
            </div>
            <div className="flex flex-row justify-between ml-24 gap-2 w-1/2 items-start">
                <div className="circle">
                    {negativeArticle}
                    <br />
                    Negatifs
                </div>
                <div className="circle">
                    {positiveArticle}
                    <br />
                    Positifs
                </div>
            </div>
        </div>
        <div className="relative flex flex-row justify-end w-1/2 items-start">
            <div
                className="border-solid border-[#2a8173] w-full h-[507px] bg-[rgba(243,_240,_250,_0.56)] absolute top-0 left-0 flex flex-col justify-center gap-12 items-start pt-8 pb-6 px-8 border-8 rounded-[56.57143020629883px]">
                <img src="https://file.rendit.io/n/eVWyBmCwj0ZW4DSMMeRi.png" alt="LogoSchneider" id="LogoSchneider" />
                <div className="flex flex-col ml-16 gap-2 w-3/4 items-start">
                    <img src="https://file.rendit.io/n/tNw2wKYUw865Ld7mCWqu.svg" alt="MaskGroup" className="ml-12" />
                    <img src="https://file.rendit.io/n/pjfscRudNQaN99ZJzfPm.svg" alt="ClipPathGroup" />
                </div>
            </div>
        </div>
    </div>
</div>
)
}