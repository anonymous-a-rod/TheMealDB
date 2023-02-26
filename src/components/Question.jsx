import React, { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const Question = ({question,answer}) => {
    const [showInfo, setShowInfo] = useState(false);
    return ( 
        <article className="p-1 mt-4 mb-4 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg flex flex-col justify-center">
            <header className='flex pt-2 pb-2 w-full flex-row justify-between  p-1 pl-2'>
            <h4 className="text-xl font-medium text-gray-800">{question}</h4>
            <button className='' onClick={()=> setShowInfo(!showInfo)}>
                <div className='rounded-full p-2'>{showInfo? <AiOutlineMinus /> : <AiOutlinePlus /> }</div>
            </button>
            </header>
            { showInfo && <p className='pr-16 mb-4 pl-2'>{answer}</p>}
        </article>
     );
}
 
export default Question;