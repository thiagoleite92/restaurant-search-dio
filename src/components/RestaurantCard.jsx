import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../assets/restaurante-fake.png'

import { 
  Restaurant,
  RestaurantInfo,
  Title,
  Address,
  RestaurantPhoto
} from './style';

const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do restaurante</Title>
        <ReactStars
          count={ 5 }
          isHalf
          activeColor="#e7711c"
          edit={ false }
          value={ 4 }
        >
          endereço
        </ReactStars>
        <Address>Rua desembargador rodolfo aureliano</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
    </Restaurant>
  )
}

export default RestaurantCard;
