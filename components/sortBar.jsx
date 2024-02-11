export default function sortBar({sortList, sort}) {
  return (
    <div className="btn-group mb-5">
      <button 
        type="button" 
        onClick={() => sortList('name')} 
        className="btn btn-outline-secondary">
        Sort by name <i className={`bi bi-caret-${sort.name == false ? 'down' : 'up'}-fill`} />
      </button>
      <button 
        type="button" 
        onClick={() => sortList('email')} 
        className="btn btn-outline-secondary">
        Sort by email <i className={`bi bi-caret-${sort.email == false ? 'down' : 'up'}-fill`} />
      </button>
      <button 
        type="button" 
        onClick={() => sortList('company')} 
        className="btn btn-outline-secondary">
        Sort by Company <i className={`bi bi-caret-${sort.company == false ? 'down' : 'up'}-fill`} />
      </button>
    </div>
  );
};
