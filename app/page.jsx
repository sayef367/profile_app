'use client'
import AddUser from "@/components/addUser";
import SortBar from "@/components/sortBar";
import TopSection from "@/components/topSection";
import AllList from "@/components/allList";
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
        <TopSection handleFilter={handleFilter} />
        
        {/* sort bar component */}
        <SortBar sortList={sortList} sort={sort} />

        {/* users list component */}
        <AllList users={users} />
      </div>
      
      {/* add user model component*/}
      <AddUser users={users} setUsers={setUsers}/> 
    </main>
  );
};
