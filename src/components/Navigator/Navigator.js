import "./Navigator.scss"
import React from 'react';
import {Link} from "react-router-dom";

export const Navigator = () =>{
    return <>
        <div className="nav-container">
            <div className="navbar">
                <div className="nav-background">
                    <div className="nav-title">Title</div>
                    <ul className="nav-list">
                        <Link to={`/`}>
                            <li>Home</li>
                        </Link>
                        <Link to={`/posts`}>
                            <li>Posts</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </>
}