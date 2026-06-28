function Props({user, user2}){
    
    return(
        <div>
            <h1>Props in React js</h1>
            <hr/>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.email}</h1>
            <hr/>
            <h1>{user2.name}</h1>
            <h1>{user2.age}</h1>
            <h1>{user2.email}</h1>
            <hr/>
            {/* <h1>{fname} {lname}, {age} , {email}</h1> */}
        </div>
    );
}

export default Props;
