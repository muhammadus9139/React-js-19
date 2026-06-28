function Wrapper({children}) {
    return (
        <div 
        style={{
            color:"white" , 
            border:"2px solid red" , 
            backgroundColor:"grey"
            }}
            >
                {children}
        </div>
    );
}

export default Wrapper;
