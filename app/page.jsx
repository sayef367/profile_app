'use client'
import AddUser from "@/components/addUser";
import SortBar from "@/components/sortBar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(0);
  const sortBoolean = { name: false, email: false, company: false };
  const [sort, setSort] = useState(sortBoolean);

  //fetch data from api
  useEffect(() => {
    async function getData() {
      const res = await fetch('https://dummyjson.com/users');
      const userData = await res.json();
      setUsers(userData.users);
    };
    getData();
  },[search]);

  if(users.length === 0) return <h2 className="text-center mt-5">Loading...</h2>;

  //search by user first name
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = users.filter((value) => {
      return value.firstName.toLowerCase().includes(searchWord.toLowerCase());
    });
    setUsers(newFilter);
    if(newFilter.length === 0) {
      setUsers(users);
    } else if(searchWord == '') {
      setSearch((pev) => pev + 1)
    };
  };

  //sort by name, email, company
  const sortList = (sortName) => {
      //sort by name
    if(sortName === 'name'){
      setSort({ name: true, email: false, company: false });
      setUsers(users.sort((a, b) => a.firstName > b.firstName ? 1 : -1 ));
      if(sort.name === true) {
        setSort(sortBoolean);
        setUsers(users.sort((a, b) => a.id > b.id ? 1 : -1));
      };
    } //sort by email
    else if(sortName === 'email') {
      setSort({ name: false, email: true, company: false });
      setUsers(users.sort((a, b) => a.email > b.email ? 1 : -1 ));
      if(sort.email === true) {
        setSort(sortBoolean);
        setUsers(users.sort((a, b) => a.id > b.id ? 1 : -1));
      };
    } //sort by company
    else if(sortName === 'company') {
      setSort({ name: false, email: false, company: true });
      setUsers(users.sort((a, b) => a.company.name > b.company.name ? 1 : -1 ));
      if(sort.company === true) {
        setSort(sortBoolean);
        setUsers(users.sort((a, b) => a.id > b.id ? 1 : -1));
      };
    };
  };

  return (
    <main className="container">
      <div className="row mt-5">
        {/* search and user input component */}
        <div className="input-group mb-5">
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
        </div>

        {/* sort bar component */}
        <SortBar sortList={sortList} sort={sort} />

        {/* users list component */}
        {
          users.map((user) => {
            return(
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4" key={user.id}>
                <Link href={`/${user.id}`} 
                  className="link-underline link-underline-opacity-0 link-body-emphasis card p-3">
                  <p className="mb-0">
                    Id: {user.id} <br />
                    Name: {`${user.firstName} ${user.lastName}`} <br />
                    Email: {user.email} <br />
                    Address: {`${user.address.address}, ${user.address.city}`} <br />
                    Company: {user.company.name}
                  </p>
                </Link>
              </div>
            )
          })
        }
      </div>
      
      {/* add user model component*/}
      <AddUser users={users} setUsers={setUsers}/> 
    </main>
  );
};
