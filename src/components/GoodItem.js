import React from 'react';

const GoodItem = (props) => {
  const { id, name, icon, description, price, full_background, addToBasket } = props
  return (
    <div className='card' id={id}>
      <div className='card-image'>
        <img src={full_background} alt={name} />

      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button className='btn' onClick={() => addToBasket({ id, name, price, icon, description })}>Buy</button>
        <span className='right' style={{ fontSize: '1.8rem' }}>{price}$</span>
      </div>
    </div>
  );
}

export default GoodItem;
