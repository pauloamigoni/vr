import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
    /* background: #232329; */
    /* border-radius: 10px; */
    /* padding: 16px; */

    width: 100%;
    /* font-family: 'Nunito Sans', sans-serif; */

    /* border: 2px solid #232129; */
    color: #666300;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${(props) =>
        props.isErrored &&
        css`
            border-color: #c53030;
            animation: treme 0.1s;
            animation-iteration-count: 3;

            @keyframes treme {
                0% {
                    margin-left: 0;
                }
                25% {
                    margin-left: 5px;
                }
                50% {
                    margin-left: 0;
                }
                75% {
                    margin-left: -5px;
                }
                100% {
                    margin-left: 0;
                }
            }
        `}


    ${(props) =>
        props.isFocused &&
        css`
            border-color: #ff9000;
            color: #ff9000;

            &::placeholder {
            color: #6c757d;
        }


        `}

    ${(props) =>
        props.isFilled &&
        css`
            color: #ff9000;
            &::placeholder {
            color: #E1E1E1;
        }
        `}



    input {
        flex: 1;
        background: #F8F8F8;
        border: 0;
        color: #666300;
        border: 1px solid #E1E1E1;

        &::placeholder {
            color: #6c757d;
        }
    }

    svg {
        margin-right: 1rem;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    svg {
        margin-left: 16px;
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
