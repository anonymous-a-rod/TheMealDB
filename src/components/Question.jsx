import React, { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const Question = ({question,answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return ( 
        <article className="p-1 mt-4 mb-4 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg flex flex-col justify-center">
            <header className='flex pt-2 pb-2 w-full flex-row justify-between  p-1 pl-2'>
            <h4 className="text-xl font-medium text-gray-800">{question}</h4>
            <button className='ml-12' onClick={()=> setShowAnswer(!showAnswer)}>
                <div className='rounded-full p-2'>{showAnswer? <AiOutlineMinus /> : <AiOutlinePlus /> }</div>
            </button>
            </header>
            { showAnswer && <p className='pr-16 mb-4 pl-2 text-stone-600'>{answer}</p>}
        </article>
     );
}
 
export default Question;