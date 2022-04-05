const getSortedProducts = (products,sortBy)=>{
  if(sortBy === 'HIGH_TO_LOW'){
    return [...products].sort((a, b) => b.price - a.price); 
  }
  if(sortBy === 'LOW_TO_HIGH'){
    return [...products].sort((a, b) => a.price - b.price); 
  }
  return products
}
// by category
const getFliteredByCategory = (sortedproducts,category) => {
    let filteredlist = sortedproducts;
    if (category.length !== 0) {
      filteredlist = filteredlist.filter((item => category.includes(item.categoryName)))
    }
    return filteredlist;
  };
  // by ratings
  const getFilteredByRatings = (sortedproducts,rating)=>{
    if(rating){
      return sortedproducts.filter(item=>item.rating >= rating)
    }
    return sortedproducts
  }

  // by price
  const getFilteredByPrice = (sortedproducts,range)=>{
    if(range){
      return sortedproducts.filter(item=>item.price <= range)
    }
    return sortedproducts
  }
  export {getSortedProducts,getFliteredByCategory,getFilteredByRatings,getFilteredByPrice}