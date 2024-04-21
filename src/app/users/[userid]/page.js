async function getUser(id) {
    let data = await fetch(`http://localhost:3000/api/user/${id}`);
    data = await data.json();
     // Log the fetched data
    return data.result;
}

const Page = async ({params}) => {
    // console.log(params)
    const usr = await getUser(params.userid);
    // console.log(usr)
  return (
    <div>
      <h2>User detail</h2>
      <h4>Name: {usr.name}</h4>
      <h4>email: {usr.email}</h4>
      <h4>age: {usr.age}</h4>
    </div>
  )
}

export default Page
