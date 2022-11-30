import React,{useState,useEffect} from "react";
import axios from "axios";


function Translate(){
    
    const[Translation,setTranslation]=useState('');

    const options = {
      method: 'POST',
      url: 'https://translate-plus.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '5b87f2b6famsh3897ba73fc6c3abp1e3c3fjsn09c6f09f21ab',
        'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
      },
      data: '{"text":"I don\'t know.","source":"en","target":"nl"}'
    };

    
    useEffect(()=>{
        axios.request(options).then(function (response) {
        console.log(response.data);
        setTranslation(response.translations)
        }).catch(function (error) {
        console.error(error);
        });
    },[])





    return(
        <div>
            <h2>Translate</h2>
                <input type="text" value={Translation}/>
                <button type="submit" onClick={Translate}>submit</button>
                <p>{options.data}</p>
        </div>
    );

};

export default Translate;