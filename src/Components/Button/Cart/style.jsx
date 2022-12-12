import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content: space-evenly;
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
    margin-right: 10px;
    :active {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #A0627B;
`;
