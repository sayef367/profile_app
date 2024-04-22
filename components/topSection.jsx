
export default function TopSection({handleFilter}) {
  return (
    <section className="input-group mb-5">
      <input 
        type="text"
        className="form-control rounded-pill me-3 text-center border border-secondary" 
        placeholder="Search User Name"
        onChange={handleFilter} 
      />
      <button 
        type="button" 
        className="btn btn-dark rounded-pill fw-light"
        data-bs-toggle="modal" 
        data-bs-target="#addUserModal">
        <i className="bi bi-file-earmark-plus"></i> Add User
      </button>
    </section>
  );
};
