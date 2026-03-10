import React from "react";
import { Form, Input , Button } from "antd";
import Header from "./Components/Header";
import hero from './assets/images/illustration-hero.svg'
import chrome from './assets/images/logo-chrome.svg'
import fireFox from './assets/images/logo-firefox.svg'
import opera from './assets/images/logo-opera.svg'
import Cascading from "./Components/Cascading";
import Footer from "./Components/Footer";
import Features from "./Components/Features";
import SimpleBookmarking from "./Components/SimpleBookmarking";
import EasySharing from "./Components/EasySharing";
import SpeedySearching from "./Components/SpeedySearching";



const LandingPage = () => {

  function onFInish (data) {
        return (
          console.log(data)
        )
  }

  // const [tab, setTab] = React.useState(()=>{<SimpleBookmarking/>})
  // const [classname , setClassname] = React.useState('f-anchor')
  // const [tabTrackSimple , setTabTrackSImple] = React.useState}(false)
  // const [easyShareSimple , setEasyShareSimple] = React.useState(false)
  // const [speedSearchTab, setSpeedSeachTab] = React.useState(false)
  const [activeTab , setActiveTab] = React.useState('simple')

  const tabconfigs = {
    simple : <SimpleBookmarking/>,
    easy   :<EasySharing/>,
    Speedy : <SpeedySearching/> 
  }

  function SimpleBookMarkTab () {
    setTab(<SimpleBookmarking/>)
    setClassname('f-anchor-active')
    setTabTrackSImple(true)
    setEasyShareSimple(false)
    setSpeedSeachTab(false)
  } 

  function EasySharingTab () {
    setTab(<EasySharing/>)
    setClassname('f-anchor-active')
    setTabTrackSImple(false)
    setEasyShareSimple(true)
    setSpeedSeachTab(false)
  } 

  function SpeedySearchingTab () {
    setTab(<SpeedySearching/>)
    setClassname('f-anchor-active')
    setTabTrackSImple(false)
    setEasyShareSimple(false)
    setSpeedSeachTab(true)
  } 


return (

    <>
    <Header/>
    <main>

       
           
      <div className='intro-section'>
        <div className='intro-image'>
             <img src={hero}/>
        <div className="intro-colored"></div>
        </div>
        <div className='intro-text'>
            <h2 className="header-text">A Simple Bookmark Manager</h2>
            <p className="p-text">A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free    
             </p>
              <div className='intro-buttons'>
            <button className="colored">Get it on Chrome</button>
            <button className="whited">Get it on Firefox</button>
        </div>
        </div>
      </div>
          <Features 
            // SimpleBookMarkTab = {SimpleBookMarkTab}
            // SpeedySearching = {SpeedySearchingTab}
            // EasySharing = {EasySharingTab}
            // classname = {classname}
            // tabTrackSimple = {tabTrackSimple}
            // easyShareSimple = {easyShareSimple}
            // speedSearchTab = {speedSearchTab}
            activeTab = {activeTab}
            setActiveTab = {setActiveTab}
            classname = 'f-anchor-active'
          />
            {tabconfigs[activeTab]}
        <div className="extension-section">
          <div className="section-three-text-extension">
              <h2 className="header-text-extension">Download the extension</h2>
              <p className="p-text-extension"> We've got more browsers in the pipeline.
                Please let us know if you've got a favourite you'd like us to prioritize
              </p>
          </div>
            <div className="browser-extension-main">
              <div className="browser-extension-chrome">
                <div className="card-text-image">
                  <img src={chrome} alt="chrome-logo"/>
                  <h4>Add to Chrome</h4>
                <p>Mininum version 62</p>
                </div>
                <div className="add-extension">
                  <button>Add & install Extension</button>
                </div>
      
             
        </div>
             
              <div className="browser-extension-firefox">
                <div className="card-text-image">
                  <img src={fireFox} alt="fireFox-logo"/>
                  <h4>Add to Firefox</h4>
                <p>Mininum version 62</p>
                </div>
                <div className="add-extension">
                  <button>Add & install Extension</button>
                </div>
  
             
        </div>
              <div className="browser-extension-opera">
                <div className="card-text-image">
                  <img src={opera} alt="opera-logo"/>
                  <h4>Add to Opera</h4>
                <p>Mininum version 62</p>
                </div>
                <div className="add-extension">
                  <button>Add & install Extension</button>
                </div>
              </div>
              </div>
        </div>
        
        <div  className="Faq">
              <div className="faq-questions">
                <h2 className="header-text-faq">Frequently Asked Questions</h2>
                <p className="p-text-faq">Here are some of our FAQs. If you have any other questions
                  you'd like answered, please feel free to email us
                </p>
              </div>
              <div className="faq-questions-list">
                <Cascading/>
              </div>
              <div className="faq-questions-button">
                <button className="colored">More info</button>
              </div>
        </div>
       <div className="preFooter">
          <div className="preFooterText">
            <p>35,000+ ALREADY JOINED</p>
            <h2>Stay up-to-date with what we're doing</h2>
          </div>
          <div className="preFooterInput">
            <Form className="Forms" style={{width: '100%', }} onFinish={onFInish}>
              
              <Form.Item 
        name='email'
        rules={
            [{
                type : 'email',
                message : 'please enter a vail email'
            },
                {required :true}]}>
            <Input style={{height: '3rem' , fontFamily: 'Rubik', borderRadius : '5px'}} 
            placeholder="Enter your Email Address"/>
        </Form.Item>
        <Form.Item>
            <Button 
            style={{height: '3rem' , 
            fontFamily: 'Rubik', 
            borderRadius : '5px', 
            color:'white',
            backgroundColor: 'hsl(0, 94%, 66%)',
            width: '100%'}}
            type="primary" htmlType="submit">
            Contact Us
            </Button>
        </Form.Item>
        </Form>
          </div>     
       </div>
       <Footer/>
       <div>
        
       </div>
        
    </main>
    </>
)

}


export default LandingPage;