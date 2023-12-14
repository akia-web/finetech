import React from 'react'
import './style.css'
import InfoBlock from '../InfoBlock'
import Logoschneider from '../../assets/moyNPGA2G7F1DlDtFkpK.png'
export default function Info() {
return (
<div className="flex flex-col gap-16 w-full h-[659px] items-start info">
    <InfoBlock time="11" info='Lorem ipsum dolor sit amet consectetur. Integer
                    arcu quis turpis ultrices elementum.' url="/"/>
    {/* <div id="ContinuezLire1" className="bg-white/0 flex flex-row justify-center pt-px gap-2 w-1/6 items-start ">
        <a href="/" id="ContinuezLire" className="text-xl font-sans text-[#2962ff] mt-0">
            Continuez à lire{" "}
        </a>
        <img src="https://file.rendit.io/n/6Bmqv67VM9rd3zgMY1TE.svg" alt="Arrowforwardios" id="Arrowforwardios"
            className="mb-px w-6" />
    </div> */}
</div>
)
}