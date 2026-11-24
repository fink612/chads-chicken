import React from 'react';

export type TButton = {
    onCLick: () => void;
    className: string;
    text: string;
}

const Button: React.FC<TButton> = (props) => {
    return (
        <button className={className} onClick={onClick}>Thank You for Your Order</button>
    )
}

export default Button;