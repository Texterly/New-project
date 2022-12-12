import React from 'react';
import { SlBasket } from 'react-icons/sl';
import { Container, Circle } from './style';

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
