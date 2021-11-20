import Button from './Button'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='pots-about content-flex'>
            <h1 className='text-center'>About</h1>
            <p className='m-4'>This app has been built with React using functional components, and a mock server ( json server ). The concept 'Hot Pots' has been used as a type of recipe posting platform for building this app. I recommend using image URLS (e.g from unsplash) when testing out this application. Some image URL's are included in the uploaded sample of this application for reference.</p>
            <Link to='/'>
                <Button title={ 'Return To Homepage' } type={ 'button' }/>
            </Link>
        </div>
    )
}

export default About
