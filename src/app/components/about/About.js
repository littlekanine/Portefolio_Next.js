"use client";

import React, { useEffect } from "react";
import NavBar from "../navBar/NavBar";

function About({ darkMode }) {
    useEffect(() => {
        console.log("Dark mode is:", darkMode ? "enabled" : "disabled");
    }, [darkMode]);

    return (
        <div className={`${darkMode ? " dark-mode" : ""}`}>
            <section id="about">
                <NavBar />
                <div className="container">
                    <div className="row about-wrapper">
                        <div className="col-md-6 col-sm-12">
                            <div className="about-wrapper__info load-hidden flex center column">
                                <p className="about-wrapper__info-text">
                                    Former bartender, I chose to reorient myself after seven years of service.
                                    <p className="about-wrapper__info-text">I want to create, improve, undertake.</p>
                                </p>
                                <p className="about-wrapper__info-text">I am starting to train on the back end, with the aim of becoming full stack. I would like to work in application creation and development</p>
                                <p className="about-wrapper__info-text">I am motivated and attentive. I look forward to collaborating with you.</p>
                                <p className="about-wrapper__info-text">Curiosity brings knowledge</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
