import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: #6eb637;
    height: 46px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #fff;
    width: 100%;
    font-weight: 500;
    margin-top: 17px;
    transition: background-color 0.2s;
    

    &:hover {
        background: ${shade(0.2, '#6eb637')};
    }
`;
