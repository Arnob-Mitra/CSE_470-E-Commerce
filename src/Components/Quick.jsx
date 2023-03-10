import React from 'react'
import { useState } from 'react'
import '../styles/quick.css'

const Quick = ({item}) => {
    const [selectedImage, setSelectedImage] = useState('');
    const [style, setStyle] = useState('main-container');
    const changeStyle =() => {
        setStyle('main-containerOne');
    };


  return (
 <div className={style}>
    <div className='card-quick' key={item.id}>
        <div className="card-row">
            <div className="card-image">
                <div className="card-top">
                    <img src={selectedImage || item.image} alt={item.title} />
                </div>
                <div className="card-bottom">
                    <img src={item.image} onClick={() => setSelectedImage('${item.image}')} alt={item.title} />
                    
                </div>
            </div>
        </div>
        <div className="card-row">
            <div className="first-div div">
                <h2 className='title'>{item.title}</h2>
                <p className='category'>{item.category}</p>
            </div>
            <div className="second-div div">
                <span className='price'>Price: {item.price}</span>
                <div className="quantity">Quantity: 1</div>
            </div>
            <div className="third-div div">
                <p className='desc'>{item.desc}</p>
            </div>
            <div className="fourth-div div">
                <button className='cart'>Add to Cart</button>
                <button className='wish'>Add to WishList</button>
            </div>
        </div>


    </div>
    <button className='back' onClick={changeStyle}>Close</button>

 </div>
  )
}

export default Quick