import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../assets/logo.svg'
import resFake from '../assets/restaurante-fake.png'
import {
  Container,
  Search,
  Logo,
  Wrapper,
  Map,
  Carousel,
  CarouselTitle
} from './style'
import { ImageCard, RestaurantCard, Modal } from '../components/'

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do App" />
          <TextField
            label='Pesquisar'
            outlined
            onTrailingIconSelect={() => this.setState({ value: '' })}
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          ><Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na Sua Área</CarouselTitle>
          <Carousel {...settings}>
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
            <ImageCard photo={resFake} />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={ modalOpened } onClose={ () => setModalOpened(!modalOpened)} />
    </Wrapper>
  )
};

export default Home;
