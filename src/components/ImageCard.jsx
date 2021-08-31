import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular});
  font-size: 16px;
  color: #ffffff;
`;

const ImageCard = ({ photo, title }) => {
  return (
    <Card photo={ photo }>
      <Title>{title}</Title>
    </Card>
  )
}
export default ImageCard; 