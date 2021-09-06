export const requeredField = value => {
    if (value)
    { return undefined; }
    else
    { return 'value is empty'; }
}

//maxLengthCreator - создатель функции валидатора
export const maxLengthCreator = (maxLength) => 
 (value) => {
    if (value && value.length > maxLength)
    { return `max length is ${maxLength} simbols`; }
    else
    { return undefined;}
}