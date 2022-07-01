export const ItemExists = (array, _id) => {
    // returns true or false
    return !!array.find((item) => item._id === _id);
};