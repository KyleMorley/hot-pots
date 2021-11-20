const Button = ({ title, type, onClick }) => {
    return (
        <button type={type} onClick={ onClick } className='btn-outline-dark btn btn-lg mt-2'>
            { title }
        </button>
    )
}

export default Button
