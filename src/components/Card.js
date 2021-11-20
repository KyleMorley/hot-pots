const Card = ({ image, title, author, open }) => {
    return (
        <div className='card pot-card'>
            <img src={image} alt='One Pot Dish' className='image-card-top' onClick={ open } />
            <div className='card-body'>
                <h2 className='card-title text-center'>{title}</h2>
                <h4 className='card-text pot-auth text-muted'>By {author}</h4>
            </div>
        </div>
    )
}

export default Card
