import { useState } from "react";

export default function addUser({users, setUsers}) {
  const [addUser, setAddUser] = useState({ firstName: '', lastName: '', email: '' });
  const [address, setAddress] = useState({ address: '', city: '' });
  const [company, setCompany] = useState('');
  const [empty, setEmpty] = useState('');

  // user from submit data
  const handelSubmit = () => {
    const newData = {
      id: users.length + 1,
      ...addUser,
      address: address,
      company: {
        name: company
      }
    };
    setUsers([...users, newData]);
    setEmpty({firstName: '', lastName: '', email: '', address: '', city: '', company: ''});
    alert('User submit data successfully');
  };

  return (
    <div className="modal fade" id="addUserModal" aria-labelledby="addUserModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addUserModalLabel">Add User</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6 mb-3">
                <label className="form-label">First Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="First Name" 
                  value={empty.firstName}
                  onChange={(e) => setAddUser({...addUser, firstName: e.target.value})}
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">Last Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Last Name" 
                  value={empty.lastName}
                  onChange={(e) => setAddUser({...addUser, lastName: e.target.value})}
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Enter Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter Email" 
                  value={empty.email}
                  onChange={(e) => setAddUser({...addUser, email: e.target.value})}
                />
              </div>
              <div className="col-7 mb-3">
                <label className="form-label">Address</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Street, Suite" 
                  value={empty.address}
                  onChange={(e) => setAddress({...address, address: e.target.value})}
                />
              </div>
              <div className="col-5 mb-3">
                <label className="form-label">City</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="City" 
                  value={empty.city}
                  onChange={(e) => setAddress({...address, city: e.target.value})}
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Company Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Company Name" 
                  value={empty.company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <button 
                  className="btn btn-dark fw-light" 
                  onClick={handelSubmit} >
                  <i className="bi bi-save" /> Save User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
