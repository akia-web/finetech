import React from 'react'
import './style.css'
import Logoschneider from '../../assets/moyNPGA2G7F1DlDtFkpK.png'

export default function InfoBlock(props) {
return (
<a href={props.link} target='_blank'>
    <div className="flex flex-row justify-between ml-4 items-start link-articles">
        <div className="flex flex-row gap-4 w-1/2 items-start">
            <div className="flex flex-col mt-2 gap-1 w-5/6 items-start">
                <div id="IlYAMinutesAFP13" className="text-xl font-sans text-[#6b6d78]">
                {props.time} 
                </div>
                <div className="text-2xl font-sans font-medium">
                    {props.title}
                </div>
            </div>
        </div>
    </div>
</a>
)
}