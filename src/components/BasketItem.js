import React from 'react';
import App from './../App';

const BasketItem = (props) => {
  const { id, icon, name, price, description, quantity, incrementQuantity, decrementQuantity } = props
  return (
    <li className='colletion-item'>
      <div className='flex'>
        <div className='left'>
          <img src={icon} alt="" />
          <div>
            {name} x{quantity} = {price * quantity}<b>$</b>
            <br />
            {description}
          </div>
        </div>
        <span className='secondary-content' >
          <a className="waves-effect waves-light btn-small" onClick={() => incrementQuantity(id)}><i className="material-icons left">exposure_plus_1</i></a>
          <a className="waves-effect waves-light btn-small" onClick={() => decrementQuantity(id)}><i className="material-icons left">exposure_minus_1</i></a>
          <i className='material-icons basket-delete' onClick={() => {
            props.removeFromBasket(id)
          }}>delete_forever</i>
        </span>
      </div>

    </li>
  );
}

export default BasketItem;
