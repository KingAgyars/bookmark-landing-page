import React from "react";
import { Collapse, ConfigProvider } from "antd";

const {Panel} = Collapse;

const Cascading = () => {



        return (

<>
    <Collapse style={{border: 'none', width:'100%', backgroundColor: 'white'}} accordion>
  <Panel header={<span style={{fontSize: '18px', fontFamily: 'Rubik',  color : '#2a3046'}}>What is Bookmark?</span>} key="1">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, 
      excepturi voluptatibus maxime natus esse adipisci magnam consequatur vel 
      quia earum aspernatur tenetur laborum! Exercitationem fuga quaerat aliquid esse 
      ipsam itaque consequuntur quisquam repellendus! Iste, exercitationem. Sequi autem 
      dignissimos dolor aut pariatur officiis cupiditate possimus accusamus tempora expedita dolorum, 
      molestiae incidunt.</p>
  </Panel>

  <Panel header={<span style={{fontSize: '18px', fontFamily: 'Rubik',  color : '#2a3046'}}>How can I request  new browser?</span>}key="2">
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, 
      excepturi voluptatibus maxime natus esse adipisci magnam consequatur vel 
      quia earum aspernatur tenetur laborum! Exercitationem fuga quaerat aliquid esse 
      ipsam itaque consequuntur quisquam repellendus! Iste, exercitationem. Sequi autem 
      dignissimos dolor aut pariatur officiis cupiditate possimus accusamus tempora expedita dolorum, 
      molestiae incidunt.</p>
  </Panel>

  <Panel header={<span style={{fontSize: '18px', fontFamily: 'Rubik',  color : '#2a3046'}}>Is there a mobile app?</span>}key="3">
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, 
      excepturi voluptatibus maxime natus esse adipisci magnam consequatur vel 
      quia earum aspernatur tenetur laborum! Exercitationem fuga quaerat aliquid esse 
      ipsam itaque consequuntur quisquam repellendus! Iste, exercitationem. Sequi autem 
      dignissimos dolor aut pariatur officiis cupiditate possimus accusamus tempora expedita dolorum, 
      molestiae incidunt.</p>
  </Panel>

  <Panel header={<span style={{fontSize: '18px', fontFamily: 'Rubik',  color : '#2a3046'}}>What about other Chromium browsers?</span>}key="4">
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, 
      excepturi voluptatibus maxime natus esse adipisci magnam consequatur vel 
      quia earum aspernatur tenetur laborum! Exercitationem fuga quaerat aliquid esse 
      ipsam itaque consequuntur quisquam repellendus! Iste, exercitationem. Sequi autem 
      dignissimos dolor aut pariatur officiis cupiditate possimus accusamus tempora expedita dolorum, 
      molestiae incidunt.</p>
  </Panel>

  
</Collapse>
            
</>
        )
}

export default Cascading;