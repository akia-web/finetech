import React from 'react'
import './style.css'


export default function NavBar() {
return (
<div id="HeaderRoot" className="flex flex-row justify-between w-full items-start">
    <img src="https://file.rendit.io/n/bXJ2F8RmshLzC9x1a1mz.png" alt="Image1" id="Image1" />
    <div className="flex flex-row justify-between w-3/5 items-start">
        <div className="bg-[#f1f3fa] flex flex-row gap-2 w-1/5 h-10 items-start pt-2 px-3 rounded-[20px]">
            <img src="https://file.rendit.io/n/51DQ1d3S5GT6FJxgyHar.svg" alt="Search" id="Search" className="w-6" />
            <div className="text-right font-sans tracking-[0.96] text-[#6b6d78] mt-1">
                <span> Chercher </span>
            </div>
        </div>
        <a  href="/" className="text-right font-sans tracking-[0.96] text-[#131722] mt-3">
            <span> Produits </span>
        </a>
        <a  href="/" className="text-right font-sans tracking-[0.96] text-[#131722] mt-3">
            <span> Communauté </span>
        </a>
        <a href="/" className="text-right font-sans tracking-[0.96] text-[#131722] mt-3">
            <span> Marchés </span>
        </a>
        <a href="/" className="text-right font-sans tracking-[0.96] text-[#2962ff] mt-3">
            <span> Actualités </span>
        </a>
        <a href="/" className="text-right font-sans tracking-[0.96] text-[#131722] mt-3">
        <span> Courtiers </span>
        </a>
        <a href="/" className="text-right font-sans tracking-[0.96] text-[#131722] mt-3">
        <span>  Plus </span>
        </a>
    </div>
    <div className="flex flex-row gap-2 w-1/6 items-start">
        <img src="https://file.rendit.io/n/nb6QIUreNNjCsfWStKXe.svg" alt="ActionPermIdentity icon" id="Person"
            className="w-10" />
        <div
            className="text-right font-sans tracking-[0.48] text-white bg-[linear-gradient(90deg,_#15abeb_12%,#bb22fa_98%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center mt-px pt-2 w-2/3 h-10 items-start rounded-lg">
            Commencez
        </div>
    </div>
</div>
)
}