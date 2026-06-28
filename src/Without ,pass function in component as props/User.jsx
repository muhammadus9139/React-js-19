const User=()=>{

  const displayname=(name)=>{
         alert(name);
  }

  return (
    <div>
      <button onClick={()=>displayname("usama")}> Display Name</button>
    </div>
  );
}

export default User;
