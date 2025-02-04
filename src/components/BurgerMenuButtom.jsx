import React from 'react';

function BurgerMenuButtom({ isOpen }) {
return (
    <div>
        <button className="relative">
        <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all
                        bg-white/15 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md border ">
            <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center 
                            ${isOpen ? '-rotate-[45deg]' : ''}`}>
                <div className={`h-[2px] w-1/2 rounded transform transition-all duration-300 origin-right delay-75 
                            ${isOpen ? 'bg-orange-400 -rotate-90 h-[1px] -translate-y-[1px]' : 'bg-white'}`}></div>

                <div className="bg-white h-[1px] rounded"></div>

                <div className={`h-[2px] w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75 
                            ${isOpen ? 'bg-orange-400 -rotate-90 h-[1px] translate-y-[1px]' : 'bg-white'}`}></div>
            </div>
        </div>
        </button>
    </div>
);
}

export default BurgerMenuButtom;
