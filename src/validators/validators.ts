export const requiredField = (value: string) => {
    return value ? undefined : 'Это поле не может быть пустым'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    return (value && value.length > maxLength)
        ? `Максимальная длина сообщения ${maxLength} символов`
        : undefined
}