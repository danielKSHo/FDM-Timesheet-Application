export  const range = (keyCount) => [...Array(keyCount).keys()]

export const areDatesSame = (first, second) =>{
    return first.getFullYear() === second.getFullYear() &&
    first.getMonth() ===second.getMonth() &&
    first.getDate() === second.getDate()
}

export const addDateBy = (date, count) =>{
    const d = new Date(date);
    return new Date(d.setDate(d.getDate()+ count))


}

export const getMonday = () =>{
    const today = new Date();
    const first = today.getDate() - today.getDay() +1;
    return new Date(today.setDate(first))

}