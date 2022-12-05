import React from 'react';
import styled from 'styled-components';
import Cart from './Cart';

function Button() {
  return (
    <Container>
      <SignInContainer>
        <SignInDis>sign in</SignInDis>
        <SignIn>sign in</SignIn>
      </SignInContainer>
      <ContainerSearch>
        <SearchDis>search</SearchDis>
        <Search>search</Search>
      </ContainerSearch>
      <ContainerCart>
        <Cart />
      </ContainerCart>
    </Container>
  );
}

export default Button;

const Container = styled.div`
  cursor: pointer;
`;

const SignInContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items:center; */
  flex-direction: column;
`;

const SignInDis = styled.button`
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: rgba(160, 98, 123, 0.4);
  width: 350px;
  height: 50px;
  background: #F5F2F2;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  :active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const SignIn = styled.button`
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #FFFFFF;
  width: 350px;
  height: 50px;
  background: #A0627B;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  :hover {
    background: #8d4763;
  }
  :active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ContainerSearch = styled.div`
  
`;

const SearchDis = styled.button`
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: rgba(160, 98, 123, 0.4);
  width: 100px;
  height: 30px;
  background: #F5F2F2;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
  margin: 10px 10px 0 0;
  :active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Search = styled.button`
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #FFFFFF;
  width: 100px;
  height: 30px;
  background: #A0627B;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  :hover {
    background: #8d4763;
  }
  :active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ContainerCart = styled.div`

`;
