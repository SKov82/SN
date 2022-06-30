import React from 'react';
import css from './FormController.module.css'

export const TextArea = ({input, meta, ...props}: any) => {
    return <>
        <textarea {...input}
                  {...props}
                  className={css.formControl + ' ' + (meta.active && meta.error ? css.error : '')}
        />
        {meta.active && meta.error && <span className={css.error}> {meta.error} </span>}
    </>
}