import {useState} from 'react'
import Button from './Button'
import Notification from './Notification'
import { toast } from 'react-toastify'


const AddPotForm = () => {
    const [pots, addPots] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('');

    //Add pot to server
    const addPot = async (pot) => {
        const res = await fetch('http://localhost:4000/pots', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(pot)
        })

        const data = res.json()
        addPots([...pots, data])
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!title || !author|| !description || !image) {
            notifyErr('Please Fill In All Fields')
        } else {
            addPot({title, author, description, image});
            notifySuccess('Success! Your Pot Has Been Added')
        }
       
        setTitle('');
        setAuthor('');
        setDescription('');
        setImage('');
    }
    
    const notifyErr = (text) => toast.error(text)

    const notifySuccess = (text) => toast.success(text)


    return (
        <form className='pot-form' onSubmit={ onSubmit }>
            <div className='form-group'>
                <label>Pot Title</label>
                <input className='form-control' type='text' placholder='Pot Title' value={ title } onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Pot Author</label>
                <input className='form-control' type='text' placholder='Pot Title' value={ author } onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' type='text' placholder='Pot Description' value={ description } onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className='form-group'>
                <label>Pot Image</label>
                <input className='form-control' type='text' placholder='Pot Title' value={ image } onChange={(e) => setImage(e.target.value)}/>
            </div>

            <Button type={ 'submit' } title={ 'Submit Pot' } />
            <Notification />
        </form>
    )
}

export default AddPotForm
