import './ProductCard.css';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  sale?: boolean;
  newProduct?: boolean;
}

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
  rating = 5,
  sale = false,
  newProduct = false
}: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {sale && <span className="badge badge-sale">-10%</span>}
        {newProduct && <span className="badge badge-new">NEW</span>}
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-info">
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
          ))}
        </div>
        <h3 className="product-title">{title}</h3>
        <div className="product-price">
          <span className="current-price">Tk {price.toFixed(2)}</span>
          {oldPrice && <span className="old-price">Tk {oldPrice.toFixed(2)}</span>}
        </div>
      </div>
    </div>
  );
}
