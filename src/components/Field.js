import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

const Field = () => {
    //static contextType = LanguageContext;
    const langType = useContext(LanguageContext);

    const text = langType === 'english' ? 'Name' : 'नाम';

    return (
        <div>
            <label htmlFor="name">{text}</label>
            <input type="text" />
        </div>
    )
}

export default Field
