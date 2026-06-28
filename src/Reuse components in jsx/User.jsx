const User=({user})=>{
  return (
    <div>
       <h1>Name: <span style={{color:'green'}}>{user.name}</span> </h1>
       <h1>Age: <span style={{color:'green'}}>{user.age}</span> </h1>
       <h1>Email: <span style={{color:'green'}}>{user.email}</span> </h1>
    </div>
  )
}

export default User;
