import React from 'react';

export const TextArea = ({input, meta, ...props}: any) => {
    return <textarea {...input} {...props} />
}