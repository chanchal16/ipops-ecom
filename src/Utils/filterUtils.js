const getSortedProducts = (products,sortBy)=>{
  if(sortBy === 'HIGH_TO_LOW'){
    return [...products].sort((a, b) => b.price - a.price); 
  }
  if(sortBy === 'LOW_TO_HIGH'){
    return [...products].sort((a, b) => a.price - b.price); 
  }
  return products
}
const getFliteredByCategory = (sortedproducts,all ,eyeglasses, computerglasses,sunglasses) => {
    const filteredlist = [];
    if (eyeglasses===false && computerglasses===false && sunglasses===false) {
      return sortedproducts;
    }
    if (eyeglasses) {
      let newList = sortedproducts.filter(
        (item) => "eyeglasses" === item.categoryName
      );
      filteredlist.push(...newList);
    }
  
    if (computerglasses) {
      let newList = sortedproducts.filter(
        (item) => "computerglasses" === item.categoryName
      ); 
      filteredlist.push(...newList);
    }
    if (sunglasses) {
        let newList = sortedproducts.filter(
          (item) => "sunglasses" === item.categoryName
        );
        filteredlist.push(...newList);
    }
    console.log("filtered list", filteredlist);
    return filteredlist;
  };
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