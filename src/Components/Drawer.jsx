import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Drawers = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <MenuOutlined onClick={showDrawer}/>
      <Drawer
        title="More Actions"
        closable={{ placement: 'end' }}
        onClose={onClose}
        open={open}
      >  
        <div className='f-anchor-div'>
         <a className='f-anchor'>Login</a>
         <a className='f-anchor'>Features</a>
         <a className='f-anchor'>Pricing</a>
         <a className='f-anchor'>Contact</a>
         </div>
      </Drawer>
    </>
  );
};
export default Drawers;