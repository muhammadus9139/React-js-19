const User=({display,getuser})=>{
const name="usama";


  return (
    <div>
      <button onClick={()=>display(name)}>Display name</button>
      <button onClick={()=>getuser()}>getuser</button>
    </div>
  );
}

export default User;
