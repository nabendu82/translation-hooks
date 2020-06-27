import React, { useState } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import './App.css'

const App = () => {
    const [language, setLanguage] = useState('english');

    const onLangChange = (lang) => {
        setLanguage(lang);
    }

    return (
        <div className="main__container">
            <div className="lang__flags">
                <span>Select a language :</span>
                <span onClick={() => onLangChange('english')}>🇺🇸</span>
                <span onClick={() => onLangChange('hindi')}>🇮🇳</span>
            </div>
            <LanguageContext.Provider value={language}>
                <UserCreate />
            </LanguageContext.Provider>
        </div>
    )
}

export default App
