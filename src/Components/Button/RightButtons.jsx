import React, { useState } from 'react';
import styled from 'styled-components';
import { TbCurrencyShekel } from 'react-icons/tb';

function RightButtons() {
  const [isDone, setIsDone] = useState(true);
  const [isNext, setIsNext] = useState(true);
  return (
    <Container>
      <Done
        style={{ background: isDone ? '#FFFFFF' : '#F5F2F2', color: isDone ? '#A0627B' : 'rgba(160, 98, 123, 0.4)' }}
        onClick={() => setIsDone((isDone) => !isDone)}
      >
        done
      </Done>
      <Next
        style={{ background: isNext ? '#A0627B' : '#F5F2F2', color: isNext ? '#FFFFFF' : 'rgba(160, 98, 123, 0.4)' }}
        onClick={() => setIsNext((isNext) => !isNext)}
      >
        next
      </Next>
      <Price>
        price:&nbsp;
        <Number>3090</Number>
        <TbCurrencyShekel />
      </Price>
      <FirstLine>
        <OrangeButton>repay</OrangeButton>
        <BlackButton>black list</BlackButton>
        <OrangeButton>cancel</OrangeButton>
        <BlackButton>done</BlackButton>
        <GreenButtonLong>wait for a confirmation</GreenButtonLong>
        <BlackButtonLong>find another</BlackButtonLong>
        <PurpleButtonLong>edit absence</PurpleButtonLong>
        <BlueButton>absence</BlueButton>
        <PurpleButtonLong>add review</PurpleButtonLong>
        <GreenButton>confirm</GreenButton>
        <PurpleButtonLong>edit review</PurpleButtonLong>
      </FirstLine>
    </Container>
  );
}

export default RightButtons;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Done = styled.button`
  height: 40px;
  width: 175px;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
  :active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Next = styled.button`
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #FFFFFF;
  width: 175px;
  height: 40px;
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

const Price = styled.button`
  border: 1px solid #A0627B;
  border-radius: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-transform: capitalize;
  color: #2E3040;
  width: 175px;
  height: 40px;
  background: #FFFFFF;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  :active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  svg {
    stroke-width: 1.5;
  }
`;

const Number = styled.span`
  font-weight: 700;
`;

const FirstLine = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrangeButton = styled.button`
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: #CA6A6A;
  width: 100px;
  height: 30px;
  background: #FFFFFF;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  :active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const BlackButton = styled.button`
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #2E3940;
  width: 100px;
  height: 30px;
  background: #FFFFFF;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  ::first-letter {
    text-transform: uppercase;
  }
  :active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const GreenButton = styled(BlackButton)`
  color: #37A834;
`;

const GreenButtonLong = styled(GreenButton)`
  width: 200px;
`;

const BlackButtonLong = styled(BlackButton)`
  width: 150px;
`;

const PurpleButtonLong = styled(BlackButtonLong)`
  color: #A0627B;
`;

const BlueButton = styled(OrangeButton)`
  color: #029AE4;
`;
