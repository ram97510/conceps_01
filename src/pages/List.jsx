import Sidebar from "../components/Sidebar";
import namelist from "../data/namelist";
import { useState } from "react";
// import ProductModal from "../components/ProductModal";
import "../styles/list.css";
import Toggle from "../components/toggle";

function List() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const perPage = 5;

  const start = (page - 1) * perPage;
  const items = namelist.slice(start, start + perPage);
  const totalPages = Math.ceil(namelist.length / perPage);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
       
        <div className="table-container">
          <div className="table-header-row">
            <h3 className="table-label">List</h3>
            <Toggle />
            {/* <div className="search-box">
              <input type="text" placeholder="Search Teams" />
            </div> */}
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Department</th>
                <th>Number</th>
                <th>Location</th>
                <th>Address</th>
                <th>Currently working</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>
              {items.map((p, index) => (
                <tr key={p.id} onClick={() => setSelected(p)} className="table-row">
                  <td className="bold-text">{String(start + index + 1).padStart(2, '0')}</td>
                  <td>
                    <div className="name-cell">
                      <span className="user-name">{p.name}</span>
                      <span className="user-email">{p.email || 'user@gmail.com'}</span>
                    </div>
                  </td>
                  <td>
                    <div className="dept-cell">
                      <span className="dept-name">{p.department || 'Product Management'}</span>
                    </div>
                  </td>
                  <td>{p.number || '9874563211'}</td>
                  <td>Coimbatore, Tamil Nadu</td>
                  <td className="address-cell">Sree Garden Layout</td>
                  <td>{p.isWorking }</td>
                  <td>{p.experience || '1 Year'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Footer */}
          <div className="table-footer">
            <div className="show-per-page">
              Show <select><option>5</option></select> per page
            </div>
            
            <div className="pagination-controls">
              <span>{start + 1}-{Math.min(start + perPage, namelist.length)} of {namelist.length}</span>
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>&lt;</button>
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  className={page === i + 1 ? "active" : ""} 
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button disabled={start + perPage >= namelist.length} onClick={() => setPage(page + 1)}>&gt;</button>
            </div>
          </div>
        </div>

        {/* {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />} */}
      </div>
    </div>
  );
}

export default List;