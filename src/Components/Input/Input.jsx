import React from 'react';
import {
  Container,
  ContainerContainer,
  Password,
  PasswordLabel,
  PasswordInput,
  AppartmentContainer,
  FirstLine,
  AppartmentInput,
  SecondLine,
} from './style';

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
