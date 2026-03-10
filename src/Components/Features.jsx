import React from "react";
import { NavLink } from "react-router-dom";
import SimpleBookmarking from "./SimpleBookmarking";
import SpeedySearching from "./SpeedySearching";
import EasySharing from "./EasySharing";

function Features ({activeTab , setActiveTab, classname}) {


function tracktabs (tabname)  {
    return (
        tabname === activeTab? classname : 'f-anchor'
    )
}

    return (
        <>
            <div className="feature-section">
                        <div className="feature-text">
                           <h2 className="header-text">Features</h2>
                              <p>Our aim is to make it quick and easy for you to access your 
                                favorite websites. Your bookmarks sync between your devices so you can
                                access them on the go</p>
                                
                              <div className="f-anchor-div">
                               <a onClick={()=>{
                                setActiveTab('simple')
                               }}className={tracktabs('simple')}>Simple Bookmarking</a>
                               
                               <a onClick={()=> {
                                setActiveTab('Speedy')
                               }}
                               className={tracktabs('Speedy')}>Speedy Searching</a>
                               <a onClick={()=>{
                                setActiveTab('easy')
                               }}
                               className={tracktabs('easy')}>Easy Sharing</a>

                            </div>
                        </div>
                  </div>
        </>
    )
}

export default Features;