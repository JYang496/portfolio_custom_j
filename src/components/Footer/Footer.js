import "./Footer.scss"
import React from 'react';
import {Link} from "react-router-dom";


const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export const Footer = () =>{
    return <>
        <div className="page-footer">
            <div className="footer">
                <div className="footer-links">
                    <ul className="footer-list">
                        <Link to={`/`}>
                            <li>Home</li>
                        </Link>
                        <li onClick={topFunction}>Back to top</li>
                    </ul>
                </div>
                <div className="footer-credits">
                    @2024 Jinhua Yang All Right Reserved.
                </div>
            </div>
        </div>

    </>
}