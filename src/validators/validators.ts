export const requiredField = (value: string) => {
    return value ? undefined : 'Это поле не может быть пустым'
}

export const maxLength = (value: string) => {
    return (value && value.length > 70) ? 'Максимальная длина сообщения 70 символов' : undefined
}