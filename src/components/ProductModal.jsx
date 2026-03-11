import "../styles/modal.css";

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-drawer" onClick={(e) => e.stopPropagation()}>
        <button className="close-x" onClick={onClose}>✕</button>
        
        <div className="drawer-header">
           <p className="breadcrumb">Product Details</p>
        </div>

        <div className="drawer-body">
          <div className="drawer-image-box">
             {product.discount && <span className="badge-discount">SAVE {product.discount}%</span>}
             <img src={product.image} alt={product.name} />
          </div>

          <h3>{product.name}</h3>
          <p className="description">{product.description}</p>

          <div className="specs">
            <div className="spec-item"><span>Availability:</span> <span className="status-in-stock">In Stock</span></div>
            <div className="spec-item"><span>SKU:</span> {product.sku || 'SH-001'}</div>
            <div className="spec-item"><span>Category:</span> {product.category}</div>
          </div>

          <div className="drawer-footer">
            <div className="drawer-price-section">
                {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
                <span className="final-price">${product.price}</span>
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;