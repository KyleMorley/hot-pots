import { FaTimes, FaPepperHot } from 'react-icons/fa'
import Button from './Button'

const Modal = ({open, close, deletePotContent, title, image, description}) => {
    if(!open) return null
    
   
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <FaPepperHot />
                    <FaTimes className='modal-close-top' onClick={ close }/>
                </div>
                <div className='modal-body'>
                    <div className='modal-img'>
                        <img src={ image } alt={ title } className='modal-img' />
                    </div>
                    <h4 className='mt-3 text-center'>{ title }</h4>
                    <p className='mt-2'>{ description }</p>
                </div>
                <div className='modal-footer'>
                    <div>
                    <Button title="Delete Pot" onClick={ deletePotContent } style={{marginRight: "12px"}}/>

                    <Button title="Close" onClick={ close } />
                    </div>
                </div>
                   
            </div>
        </div>
    )
}

export default Modal
