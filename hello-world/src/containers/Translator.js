import { useState } from "react";
import './Translator.css'

const Translator=()=>{
    const [inputText, setInputText] = useState('');
    const [outputLang, setOutputLang] = useState('de');
    const [outputText, setOutputText] = useState('');

    const translate=()=>{
        console.log(outputLang);
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${inputText}"}]`
        };
        
        fetch(`${process.env.REACT_APP_Base_URL}${outputLang}${process.env.REACT_APP_Query_Param}`, options)
            .then(response => response.json())
            .then(response => {
                const translatedText=response[0].translations[0].text;
                setOutputText(translatedText);
                console.log(translatedText);
            })
            .catch(err => console.error(err));
    }

    return(
        <section className="translator">
            <div className="row-wrapper">
                <div className="translator-container input-lang">
                    <div className="top-row">
                        <button 
                            className="btn btn-primary btn-translate"
                            onClick={translate}
                            >
                            Translate
                        </button>
                    </div>
                    <form action="" className="input-form">
                        <textarea
                            className="text-box"
                            placeholder="Enter text (any language)"
                            onChange={e => setInputText(e.target.value)}
                        >
                        </textarea>     
                    </form>
                </div>
                <div className="translaor-container output-lang">
                    <div className="top-row">
                        <select 
                            name="languages" 
                            id="languages"
                            className="form-select form-select-sm"
                            onChange={e => setOutputLang(e.target.value)}
                        >
                            <option value="de">German</option>
                            <option value="ar">Arabic</option>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="es">Spanish</option>
                        </select>
                    </div>    
                        <p className="text-box output-box">
                            {
                                outputText === "" ?
                                <span className="output-placeholder">Select a language</span>
                                :
                                outputText
                            }
                        </p>
                </div>
            </div>
        </section>
    );
}

export default Translator;