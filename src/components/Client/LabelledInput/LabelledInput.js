import React from 'react';
import styles from './LabelledInput.module.scss'

const LabelledInput = (props) => {
    const {label, id, value, handleChange, handleBlur, disabled, halfColumn, errors} = props;

    const errorCheck = errors && !(Object.keys(errors).length === 0)
    const labelledInputStyles = [styles.labelledInput];

    if (halfColumn) {
        labelledInputStyles.push(styles.halfColumn);
    }

    return (
        <div className={labelledInputStyles.join(' ')}>
            <label>
                {label}
            </label>
            <input
                className={errorCheck ? styles.error : null}
                id={id}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                disabled={disabled}
            />
            {errorCheck ? <div className={styles.errorLabel}>{errors}</div> : <div className={styles.errorLabel}/>}
        </div>
    );
};

export default LabelledInput;
