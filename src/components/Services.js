import { useState, useEffect } from 'react'
import Card from './Card'
import Modal from './Modal'
import Notification from './Notification'
import { toast } from 'react-toastify'



const Services = () => {
    const [pots, setPots] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    let [modalContent, setModalContent] = useState('')
   
    //Fetch Pots From Server
    useEffect(() => {
        const getPots = async() => {
            const potsFromServer = await fetchPots();
            setPots(potsFromServer);
        };

        getPots()
    }, [pots])

    const fetchPots = async () => {
        const res = await fetch('http://localhost:4000/pots');
        const data = await res.json();

        return data;
    }

    //Open Modal 
    const openModalContent = (image, title, description, id) => {
        setModalOpen(true)
        getModalContent(image, title, description, id)
    }

    //Close Modal
    const closeModalContent = () => setModalOpen(false)

    //Pass Card Data To Modal
    const getModalContent = (image, title, description, id) => {
        modalContent = { title, image, description, id }
        setModalContent(modalContent)
    }

    //Delete Pot
    const deletePot = async (id) => {
        await fetch(`http://localhost:4000/pots/${id}`, {
            method: 'DELETE'
        })

        closeModalContent()
        notifySuccess('Pot Successfully Deleted From Databaseserve!') 
    }

    //Notification Success
    const notifySuccess = (text) => toast.success(text)

    return (
        <div className='pot-content'>
            {
                pots.length > 0 ? 
                pots.map((pot) => (
                    <Card image={ pot.image } title={ pot.title } author={ pot.author } key={ pot.id } open={ () => openModalContent(pot.image, pot.title, pot.description, pot.id) }/>
                    )    
                )
                : <h2 className='text-center m-auto text-muted mt-4'>Your pots will be displayed here</h2>
            } 

            <Modal open={ modalOpen } close={ closeModalContent } title={ modalContent.title } image={ modalContent.image } description={ modalContent.description } deletePotContent={ () => deletePot(modalContent.id) }/>
            <Notification />
        </div>
    )
}

export default Services
