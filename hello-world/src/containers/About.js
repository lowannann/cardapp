import "/Users/joannechi/nlpWeb/myApp/nlpweb/mycardapp/cardapp/hello-world/src/containers/About.css"
import me from "./IMG_0641.png";
function About(){

    return(
        <div className="container">
            <div className="page-header">
                <div className="row">
                    <h3>
                    <img src={me} alt="me"/>                    
                    </h3>

                    <div className="col-lg-8 col-md-7 col-sm-6">
                        <h1>
                         Hey! This is Joanne 👩🏻‍💻
                        </h1>
                        <p></p>
                        <p>
                            1999 | NTU GIL
                        </p>
                        <li>
                            姓名：紀柔安
                        </li>
                        <li>
                            學號：r11142005
                        </li>
                        <li>
                            gmail：jajoanne.chi88@gmail.com
                        </li>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-6">
                        <div className="sponsor">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default About;