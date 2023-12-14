import React from 'react'
import Logoschneider from '../../assets/moyNPGA2G7F1DlDtFkpK.png'

export default function InfoBlock(props) {
return (
<div className="flex flex-row justify-between ml-4 w-full items-start">
    <div className="flex flex-row gap-4 w-1/2 items-start">
        <img src={Logoschneider} alt="Image7" id="Image7" className="w-12" />
        <div className="flex flex-col mt-2 gap-1 w-5/6 items-start">
            <div id="IlYAMinutesAFP13" className="text-xl font-sans text-[#6b6d78]">
              {props.time} 
            </div>
            <div className="text-2xl font-sans font-medium">
                {props.title}
            </div>
            <div id="ContinuezLire1" className="bg-white/0 flex flex-row justify-center pt-px gap-2 items-start ">
                <a href={props.link} id="ContinuezLire" className="text-xl font-sans text-[#2962ff] mt-0">
                    en savoir plus
                </a>
              
            </div>
        </div>
    </div>
</div>
)
}