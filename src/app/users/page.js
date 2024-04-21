import Link from "next/link";

async function getUsers() {
    let data = await fetch("http://localhost:3000/api/user");
    data = await data.json();
     // Log the fetched data
    return data;
}

const Page = async () => {
    const users = await getUsers();
    //console.log(users)
  return (
    <div>
    <h1>User List</h1>
{
  users.map((item) => (
    <div key={item.id}>

      <Link href={`users/${item.id}`}>{item.name}</Link>
    </div>
  ))
}
   
    </div>
  )
}

export default Page
