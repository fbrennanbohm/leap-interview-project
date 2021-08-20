import React from 'react';
import styles from './Header.module.scss';
import Button from "../Button/Button";
import backArrow from '../../assets/icons/Vector.svg';

const Header = (props) => {
    const {isEdit, onBack, setEditable, onClick} = props

    return (
        <div className={styles.header}>
            <div className={styles.leftContent}>
                <button onClick={onBack}>
                    {
                        isEdit && <img src={backArrow} alt='Back'/>
                    }
                </button>
                <h1>My Account</h1>
            </div>
            <Button label={isEdit ? 'Save' : 'Edit'} onClick={onClick}/>
        </div>
    );
};

export default Header;