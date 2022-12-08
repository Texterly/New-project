import React from 'react';
import styled from 'styled-components';
import LeftButtons from './LeftButtons';
import RightButtons from './RightButtons';

function Button() {
  return (
    <Container>
      <LeftButtons />
      <RightButtons />
    </Container>
  );
}

export default Button;

const Container = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-around;

`;
