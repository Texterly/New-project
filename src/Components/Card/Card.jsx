import React, { useState } from 'react';
import styled from 'styled-components';
import { BsPlus, BsCheck } from 'react-icons/bs';

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

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px 0;
`;

const Form = styled.div`
    width: 500px;
    height: 300px;
    background: #FFFFFF;
    border: 0.5px solid #B7CEE8;
    border-radius: 12px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Condition = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    margin-right: 20px;
    cursor: pointer;
`;

const Slider = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 20px;
    background: #e2dfdf;
    position: relative;
`;

const LeftCheck = styled.div`
    background: #FFFFFF;
    border-radius: 50%;
    width:25px;
    height: 25px;
    position: absolute;
    left: 3px;
    top: 2.5px;
    box-shadow: 3px 1px 6px 0px rgba(0, 0, 0, 0.3);
`;

const RightCheck = styled.div`
  background: #ffffff;
    border-radius: 50%;
    width:25px;
    height: 25px;
    position: absolute;
    right: 3px;
    top: 2.5px;
    box-shadow: 3px 1px 6px 0px rgba(0, 0, 0, 0.3);
`;
