import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px 0;
`;

export const Form = styled.div`
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

export const Condition = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
`;

export const Text = styled.div`
    margin-right: 20px;
    cursor: pointer;
`;

export const Slider = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 20px;
    background: #e2dfdf;
    position: relative;
`;

export const LeftCheck = styled.div`
    background: #FFFFFF;
    border-radius: 50%;
    width:25px;
    height: 25px;
    position: absolute;
    left: 3px;
    top: 2.5px;
    box-shadow: 3px 1px 6px 0px rgba(0, 0, 0, 0.3);
`;

export const RightCheck = styled.div`
  background: #ffffff;
    border-radius: 50%;
    width:25px;
    height: 25px;
    position: absolute;
    right: 3px;
    top: 2.5px;
    box-shadow: 3px 1px 6px 0px rgba(0, 0, 0, 0.3);
`;
