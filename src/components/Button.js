import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Button = () => {
    const langType = useContext(LanguageContext);

    const renderText = (text) => {
        const displayText = text === 'english' ? 'Submit' : 'जमा करें';
        return displayText
    }

    return <button>{renderText(langType)}</button>

}

export default Button;