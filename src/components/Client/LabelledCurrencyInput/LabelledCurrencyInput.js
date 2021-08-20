import React from 'react';
import styles from './LabelledCurrencyInput.module.scss'

const LabelledCurrencyInput = (props) => {
    const {label, id, value, handleChange, handleBlur, disabled, halfColumn, errors} = props;

    const errorCheck = errors && !(Object.keys(errors).length === 0)
    const labelledCurrencyInputStyles = [styles.labelledCurrencyInput];

    if (halfColumn) {
        labelledCurrencyInputStyles.push(styles.halfColumn);
    }
    
    return (
        <div className={labelledCurrencyInputStyles.join(' ')}>
            <label>
                {label}
            </label>
            <div className={styles.labelledCurrencyInputContainer}>
                <div className={disabled ? styles.currencyIcon + " " + styles.currencyIconDisabled : styles.currencyIcon}>
                    $
                </div>
                <input
                    className={errorCheck ? styles.error : null}
                    id={id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value}
                    disabled={disabled}
                />

            </div>
            {errorCheck ? <div className={styles.errorLabel}>{errors}</div> : <div className={styles.errorLabel}/>}
        </div>
    );
};

export default LabelledCurrencyInput;
