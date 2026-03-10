import React from "react";
import secondhero from '../assets/images/illustration-features-tab-1.svg'


function SimpleBookmarking () {

    return (

        <>
        <div className="section-three">
                  <div className="second-hero">
                    <img src={secondhero} alt="hero-2"/>
                    <div className="section-three-colored"></div>
                  </div>
                  <div className="section-three-text">
                      <h2 className="header-text">Bookmark in one click</h2>
                      <p className="p-text">Oragnize your bookmarks however you like.
                        Our simple drag-and-drop interface gives you complete 
                        control over how you manage your facvourite sites
                      </p>
                      <div>
                        <button className="colored-moreinfo">More info</button>
                      </div>
                  </div>
                </div>
        </>
    )
}

export default SimpleBookmarking;