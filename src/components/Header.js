import { FaPepperHot } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
           <div className='container'>
                <FaPepperHot className='navbar-brand brand'/>
               <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarMenu'>
                   <span className='navbar-toggler-icon'></span>
               </button>
                <div className='collapse navbar-collapse' id='navbarMenu'>
                    <ul className='navbar-nav'>
                        <Link to='/'>
                        <li className='nav-item'>Home</li>
                        </Link>
                        <Link to='/pots'>
                        <li className='nav-item'>Pots</li>
                        </Link>
                        <Link to='/add'>
                        <li className='nav-item'>Add Pot</li>
                        </Link>   
                        <Link to='/about'>
                        <li className='nav-item'>About</li>
                        </Link>                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header

