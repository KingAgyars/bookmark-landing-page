import React from "react";
import tab3 from '../assets/images/illustration-features-tab-3.svg'


function EasySharing () {

            return (

                <>
                     <div className="section-three">
                                      <div className="second-hero">
                                        <img src={tab3} alt="hero-2"/>
                                        <div className="section-three-colored"></div>
                                      </div>
                                      <div className="section-three-text">
                                          <h2 className="header-text">Share your bookmarks</h2>
                                          <p className="p-text">Easily share your bookmarks and collections
                                            with others. Create a shareable link that you can send 
                                            at the click of a button
                                          </p>
                                          <div>
                                            <button className="colored-moreinfo">More info</button>
                                          </div>
                                      </div>
                                    </div>
                </>
            )

}

export default EasySharing