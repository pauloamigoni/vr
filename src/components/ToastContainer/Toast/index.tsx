import React, { useEffect } from 'react';
import { FiXCircle } from 'react-icons/fi';

// import ImgSuccess from './logo.png';
// import ImgInfo from '../Toast/assets/info.jpg';
// import ImgError from '../Toast/assets/error.jpg';

import { ToastMessage, useToast } from '../../../hooks/toast';
import { BodyContaniner, Body, Chat, PopUp, Message, User } from './styles';

interface ToastProps {
    message: ToastMessage;
    style: object;
}

const img = {
    info: <img src="./logo.png" alt="" />,
    error: <img src="./logo.png" alt="" />,
    success: <img src="./logo.png" alt="" />,
};


const Toast: React.FC<ToastProps> = ({ message, style }) => {
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [removeToast, message.id]);

    return (
        <>
            <BodyContaniner>
                <Body>
                    <Chat>
                        <PopUp>{img[message.type || 'info']}</PopUp>
                        <Message
                            type={message.type}
                            hasDescription={Number(!!message.description)}
                            style={style}
                        >
                            {message.description && (
                                <p>{message.description}</p>
                            )}
                        </Message>
                        <User
                            type={message.type}
                            hasDescription={Number(!!message.description)}
                            style={style}
                        >
                            <button
                                onClick={() => removeToast(message.id)}
                                type="button"
                            >
                                <FiXCircle size={18} />
                            </button>
                        </User>
                    </Chat>
                </Body>
            </BodyContaniner>
        </>

    );
};

export default Toast;
