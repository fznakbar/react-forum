import React from 'react';

function Footer(){
    return (
        <>
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                <div>
                    <h6 style={{color : 'red'}}>Global Confirmed Case : 950,430</h6>
                    <h6 style={{color : 'red'}}>Confirmed Death : 48,276</h6>
                    <h6>Updated : 2 April 2020</h6>
                    <p className="text-justify">
                    The rapidly changing nature of novel coronavirus COVID-19 has placed significant and increasing restrictions 
                    on the freedom of movement of people across the globe, within countries and across borders. 
                    Local authorities may also impose health screening measures for travellers. 
                    Effective 17 March 2020, all travel of our Volunteers must be cleared by the host entity before purchasing tickets 
                    and start of the travel and must comply with relevant conditions and restrictions set by national and local authorities. 
                    Please check with your host entity on processes to obtain such an approval.
                    </p>
                </div>
                </div>
                <hr></hr>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12" style={{width : '800px'}}>
                    <p className="copyright-text">
                    Copyright 2020 &copy; Muhammad Fauzan Akbar
                    </p>
                </div>

                <div>
                    <ul className="social-icons">
                    <li><a className="facebook" href="https://www.instagram.com/fznakbar/"><i className="fab fa-instagram"></i></a></li>
                    <li><a className="twitter" href="mailto:fauzanakbar10@gmail.com"><i className="fab fa-google-plus-g"></i></a></li>
                    <li><a className="dribbble" href="https://www.linkedin.com/in/muhammad-fauzan-akbar-3a9a84153/"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                </div>
            </div>
            </footer>
            </>
    )
}

export default Footer