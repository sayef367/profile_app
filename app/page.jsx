import Link from "next/link";

async function getData() {
  const res = await fetch('https://dummyjson.com/users');
  return res.json();
};

export default async function Home() {
  const data = await getData();
  const users = data.users;
  if(!users) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <main className="container">
      {/* <h1 className="text-center mt-4 mb-4">Wellcome to Profile App</h1> */}
      <div className="row mt-5">
        <div className="input-group mb-5">
          <input 
            type="text"
            className="form-control rounded-pill me-3 text-center" 
            placeholder="Search User Name"
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
