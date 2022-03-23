export const ItemExists = (array, id) => {
    // returns true or false
    return !!array.find((item) => item.id === id);
};