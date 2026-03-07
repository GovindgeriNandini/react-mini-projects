import Card from './Card.js'
import './ProductCard.css';

const ProductCard = ({name, description, price, image,isOnsale, salePrice}) => {

    return (
      < Card className="product-card">
        <img src={image} alt = {name} />

        <div className="product-info">
       
          <h3>{name}
            {isOnsale && <span className = 'sale-badge'> Sale!</span>}
          </h3>
          <p >{description}</p>

          <span className='price-section' >
            {isOnsale ? (
              <>
              <span className='original-price'> Original Price: ${price} </span>
              <span className='sale-price'>  Discounted: ${salePrice} </span>
              </>
            ) : (
              <span className='price'>
              ${price}
              </span>
            )}
            </span>
          <button className ='add-to-cart-btn'  onClick={()=>alert(`Added ${name} to cart!`)}>
            Add to cart
          </button>

        </div>
      </Card>
    );
}

export default ProductCard;
