import React from 'react';
import styles from './LabelledSelect.module.scss'
import Select from 'react-select';
import {useField} from "formik";

const LabelledSelect = (props) => {
    const {label, id, disabled, halfColumn, error, options} = props;
    const labelledSelectStyles = [styles.labelledSelect];

    if(halfColumn){
        labelledSelectStyles.push(styles.halfColumn);
    }
    const [, meta, helpers] = useField(id);

 return (
     <div className={labelledSelectStyles.join(' ')}>
         <label>
             {label}
         </label>
         <Select
             value={meta.value ? { value: meta.value, label: meta.value } : null}
             className={`select ${meta.error && meta.touched ? 'error' : ''}`}
             classNamePrefix={'select'}
             options={options.map((option) => ({ value: option, label: option }))}
             onChange={(value) => helpers.setValue(value?.value || null)}
             isDisabled={disabled}
             onBlur={() => helpers.setTouched(true)}
             isSearchable={false}
             components={{
                 IndicatorSeparator: () => null
             }}
         />
         {error && <div className={styles.errorLabel}>{error}</div>}
     </div>
 );
};

export default LabelledSelect;