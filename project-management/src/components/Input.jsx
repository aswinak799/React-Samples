import React from 'react';
import { forwardRef } from 'react';

const Input = forwardRef(({label, textArea, ...props}, ref) => {
    const CLASSES = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
    return (
        
            <p className='flex flex-col gap-1 my-4'>
                <label htmlFor="" className='text-sm font-bold uppercase text-stone-500'>{label}</label>
                    {textArea? <textArea ref={ref} {...props} className={CLASSES}/> : <input type="text" ref={ref} {...props} className={CLASSES}/>}
                </p>
        
    );
})

export default Input;
