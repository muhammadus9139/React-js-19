function Wrapper({children,color}) {
    return (
        <div 
        style={{
            color:"white" , 
            border:"2px solid red" , 
            backgroundColor:color
            }}
            >
                {children}
        </div>
    );
}

export default Wrapper;
