import React from "react";
import tab2 from '../assets/images/illustration-features-tab-2.svg';




const SpeedySearching = () => {

    return (
        <>
        <div className="section-three">
                          <div className="second-hero">
                            <img src={tab2} alt="hero-2"/>
                            <div className="section-three-colored"></div>
                          </div>
                          <div className="section-three-text">
                              <h2 className="header-text">Intelligent Search</h2>
                              <p className="p-text">Our powerful search feature will help
                                you find saved sites in no time at all. No need to trawl through all
                                of your bookmarks
                              </p>
                              <div>
                                <button className="colored-moreinfo">More info</button>
                              </div>
                          </div>
                        </div>
        </>
    )
}

export default SpeedySearching