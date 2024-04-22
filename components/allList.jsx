import Link from "next/link";

export default function AllList({users}) {
  return (
    <>
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
    </>
  );
};
