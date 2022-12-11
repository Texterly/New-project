import React from 'react';
import styled from 'styled-components';

function Input() {
  return (
    <Container>
      <ContainerContainer>
        <Password>
          <PasswordLabel htmlFor="password">
            New password *
          </PasswordLabel>
          <PasswordInput id="password" type="password" required />
          <PasswordLabel htmlFor="password">
            Repeat new password *
          </PasswordLabel>
          <PasswordInput id="password" type="password" required />
        </Password>
      </ContainerContainer>
      <AppartmentContainer>
        <FirstLine>
          <AppartmentInput type="text" placeholder="Apartment number *" required />
        </FirstLine>
        <SecondLine>
          <AppartmentInput type="text" placeholder="Entrance number" />
          <AppartmentInput type="text" placeholder="Entrance code" />
        </SecondLine>
      </AppartmentContainer>
    </Container>
  );
}

export default Input;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ContainerContainer = styled.div`
  width: 450px;
  height: 150px;
  padding: 20px;
  border: 0.5px solid #B7CEE8;
  border-radius: 12px;
  box-shadow: inset 0px -1px 0px #E9E3E5;
  display: flex;
`;

const Password = styled.div`
  display: flex;
  flex-direction: column;  
  color: #B79BA6;
  width: 100%;
`;

const PasswordLabel = styled.label`
  padding-bottom: 10px;
`;

const PasswordInput = styled.input`
  height: 20px;
  padding: 10px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #EDE4E8;
  font-size: 12px;
`;

const AppartmentContainer = styled.div`
  width: 450px;
  height: 130px;
  padding: 20px;
  border: 0.5px solid #B7CEE8;
  border-radius: 12px;
  box-shadow: inset 0px -1px 0px #E9E3E5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FirstLine = styled.div``;

const SecondLine = styled.div``;

const AppartmentInput = styled.input`
  font-size: 18px;
  outline: none;
  border: none;
  border-bottom: 1px solid #EDE4E8;
  color: #B79BA6;
  width: 160px;
  :first-child{
  margin-right: 50px;
  }
`;
