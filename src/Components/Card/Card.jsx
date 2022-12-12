import React, { useState } from 'react';
import { BsPlus, BsCheck } from 'react-icons/bs';
import {
  Container, Form, Condition, Text, Slider, LeftCheck, RightCheck,
} from './style';

function Card() {
  const [email, setEmail] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);
  const [security, setSecurity] = useState(true);
  const [signIn, setSignIn] = useState(true);

  const handleClickEmail = () => {
    setEmail((email) => !email);
  };

  const handleClickTwoFactor = () => {
    setTwoFactor((twoFactor) => !twoFactor);
  };

  const handleClickSecurity = () => {
    setSecurity((security) => !security);
  };

  const handleClickSignIn = () => {
    setSignIn((SignIn) => !SignIn);
  };

  return (
    <Container>
      <Form>
        <Condition>
          <Text onClick={() => handleClickEmail()}>Email Authentication</Text>
          {email ? <BsPlus style={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }} /> : <BsCheck style={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }} /> }
        </Condition>
        <Condition>
          <Text onClick={() => handleClickTwoFactor()}>Google Two Factor</Text>
          {twoFactor ? <BsPlus style={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }} /> : <BsCheck style={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }} /> }
        </Condition>
        <Condition>
          <Text onClick={() => handleClickSecurity()}>Security key</Text>
          {security ? <BsPlus style={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }} /> : <BsCheck style={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }} /> }
        </Condition>
        <Condition>
          <Text>Sign in with biometrics</Text>
          <Slider onClick={() => handleClickSignIn()}>
            { signIn ? <LeftCheck></LeftCheck> : <RightCheck></RightCheck>}
          </Slider>
        </Condition>
      </Form>
    </Container>
  );
}

export default Card;
