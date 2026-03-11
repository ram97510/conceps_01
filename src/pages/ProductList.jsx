import Sidebar from "../components/Sidebar";
import products from "../data/products";
import { useState } from "react";
import ProductModal from "../components/ProductModal";
import "../styles/Product.css";
import Toggle from "../components/toggle";

function ProductList() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const perPage = 8; // Increased to match a 4-column grid
  const start = (page - 1) * perPage;
  const items = products.slice(start, start + perPage);

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <header className="results-header">
          <Toggle />
            <h3>Products</h3>
          <p>{start + 1} - {Math.min(start + perPage, products.length)} over {products.length} results</p>
           
        </header>

        <div className="product-grid">
          {items.map((p) => (
            <div key={p.id} className="product-card" onClick={() => setSelected(p)}>
              <div className="card-image-container">
                {/* {p.discount && <span className="badge-discount">SAVE {p.discount}%</span>} */}
                <img src={p.image} alt={p.name} />
              </div>
              
              <div className="card-info">
                <h4>{p.name}</h4>
                <div className="card-footer">
                  <div className="rating">
                    <span className="star-icon">⭐</span> {p.rating}
                  </div>
                  <div className="price-row">
                    <span className="current-price">${p.price}</span>
                    <button className="addpro-btn">+ Add</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
          <span>Page {page}</span>
          <button disabled={start + perPage >= products.length} onClick={() => setPage(page + 1)}>Next</button>
        </div>

        <ProductModal product={selected} onClose={() => setSelected(null)} />
      </main>
    </div>
  );
}

export default ProductList;