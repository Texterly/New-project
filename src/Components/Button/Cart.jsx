import React from 'react';
import { SlBasket } from 'react-icons/sl';
import styled from 'styled-components';

function Cart() {
  return (
    <Container>
      <SlBasket style={{ size: '2em' }} />
      <div>cart</div>
      <Circle>1</Circle>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    border-radius: 4px;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #A0627B;
    width: 100px;
    height: 30px;
    background: #FFFFFF;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
    margin: 10px 10px 0 0;
    :active {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

const Circle = styled.div`
    border-radius: 50%;
    border: 1px solid #A0627B;
`;
