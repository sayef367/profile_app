import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return res.json();
};

export default async function Page({ params }) {
  const { userid } = params;
  const user = await getData(userid);

  if(!user) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container mt-5 mb-5 pt-lg-5 pb-lg-5">
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="card p-4 mt-3">
            <Image 
              priority
              src={user.image}
              alt="Picture of the author"
              width={200}
              height={200}
              className="rounded-circle mx-auto d-block"
            />
            <h1 className="fw-bold mt-4 text-center">
              {`${user.firstName} ${user.lastName}`}
            </h1>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="card p-3 mt-3">
            <h4 className="mb-3">Profile Information</h4>
            <table className="table table-hover mb-0">
              <tbody>
                <tr>
                  <td>User Id</td>
                  <td className="fw-light" colSpan="2">{user.id}</td>
                </tr>
                <tr>
                  <td>First Name</td>
                  <td className="fw-light" colSpan="2">{user.firstName}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td className="fw-light" colSpan="2">{user.lastName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td className="fw-light" colSpan="2">{user.email}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td className="fw-light" colSpan="2">{`${user.address.address}, ${user.address.city}`}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td className="fw-light" colSpan="2">{user.company.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
