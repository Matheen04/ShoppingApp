import '../App.css';
import data from '../Data/productList'

const DisplayProducts = () => {
console.log(data);

const displayProductsList = () => {






    
    return data?.productsList?.map((eachData) => {
        return(
            <div className= 'product-details-container'>
            <img src={eachData.image} className="product-image"></img>
            <div>Name - {eachData.name}</div>
            <div>Price - {eachData.price}rs</div>
            </div>
        )
        
    })
}
    return (
        <div className = "products-list-container">
        
            {displayProductsList()}
        </div>
    );
}

export default DisplayProducts;
