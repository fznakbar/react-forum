import React from 'react';
import Footer from '../components/footer'

function About(){
    return (
        <>
        <div style={{height : '85vh'}}>
            <div className="container" style={{backgroundColor : 'white', marginTop : '5%'}}>
                <h2 style={{textAlign : 'center'}}>ABOUT</h2>
                <p style={{textAlign : 'center', color : 'black'}}>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.
                    The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</p>
                <h2 style={{textAlign : 'center'}}>How It Spread</h2>  
                <p style={{textAlign : 'center', color : 'black'}}>Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.</p>
                <p style={{textAlign : 'center', color : 'black'}}>You can protect yourself and help prevent spreading the virus to others if you:<br></br>
                   Do : <br></br>
                    Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub,<br></br>
                    Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze,<br></br>
                    Avoid close contact (1 meter or 3 feet) with people who are unwell,<br></br>
                    Stay home and self-isolate from others in the household if you feel unwell<br></br>
                    Don't : <br></br>
                    Touch your eyes, nose, or mouth if your hands are not clean</p>
                <h3 style={{textAlign : 'center', color : 'red'}}>There’s currently no vaccine to prevent coronavirus disease (COVID-19).</h3>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default About