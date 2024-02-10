'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(0);

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

  return (
    <main className="container">
      <div className="row mt-5">
        <div className="input-group mb-5">
          <input 
            type="text"
            className="form-control rounded-pill me-3 text-center" 
            placeholder="Search User Name"
            onChange={handleFilter} 
          />
          <button type="button" className="btn btn-dark rounded-pill">Add User</button>
        </div>
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
    </main>
  );
};
