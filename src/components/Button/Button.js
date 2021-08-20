import React from 'react';
import styles from './Button.module.scss'

const Button = (props) => {
    const {type = 'primary',small, label, onClick} = props;
    const buttonStyles = [styles.button];

    switch (type) {
        case 'primary':
            buttonStyles.push(styles.primary);
            break;
        case 'secondary':
            buttonStyles.push(styles.secondary);
            break;
        case 'special':
            buttonStyles.push(styles.special);
            break;
        case 'specialVisible':
            buttonStyles.push(styles.specialVisible);
            break;
    }

    if(small){
        buttonStyles.push(styles.small)
    }

    return (
        <button
            className={buttonStyles.join(' ')}
            onClick={onClick}
        >
         <span>{label}</span>
        </button>
    );
};

export default Button;