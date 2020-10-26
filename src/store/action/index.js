
const set_data = ()=>{
    return (dispatch)=>{
        dispatch({ type: "SETDATA", 
            user:{ name : "Umair", email:"umair@gmail.com"}
        })
        console.log("running...")
    }
}
export { 
    set_data
}