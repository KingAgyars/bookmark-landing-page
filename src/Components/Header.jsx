import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../assets/images/logo-bookmark.svg'
import Drawers from '../Components/Drawer'


const Header = () => {


    return(
        <><header>
            <nav className='bookmark-header'>
               <div><img src={logo} alt="logo"/></div>
               <div className='header-list'>
                        <nav>
                             <ul className='header-nav'>
                                 <li><a href="#">FEATURES</a></li>
                                 <li><a href="#">PRICING</a></li>
                                 <li><a href="#">CONTACT</a></li>
                                 <button>LOGIN</button>
                             </ul>
                        </nav>
               </div>
                <div className='draws'><Drawers/></div>
            </nav>
        </header>
        </>
        
    )
}











export default Header;