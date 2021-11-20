import Button from './Button'
import { FaPepperHot } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
            <div className='content-flex'>
                <h4 className='text-dark'>MORLEYS</h4>
                <h1 className='text-danger'>Hot Pots</h1>
                <FaPepperHot className='logo-home'/>
                <div className='btns-home mt-4'>
                <Link to='/pots'>
                <Button title={ 'See Pots' }/>
                </Link>
                <Link to='/add'>
                <Button title={ 'Add Pots'} />
                </Link>
                </div>
            </div>
    )
}

export default Home
