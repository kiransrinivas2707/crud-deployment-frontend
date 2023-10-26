import {useState,useEffect} from "react"

function StudentForm(props){
    const [name,setName] = useState(props.nameValue)
    const [email,setEmail] =useState(props.emailValue);
    const [rollNo,setRollNo] =useState(props.rollNoValue);
    const arr =[name,email,rollNo];

    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    },[props.nameValue,props.emailValue,props.rollNoValue]);

    
    
    const handleClick =()=>{
        props.getState(arr);
    }
    
    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} className="form-control my-3" placeholder="Enter your name" 
            onChange={(event)=>setName(event.target.value)}/>
            <input defaultValue={props.emailValue} className="form-control my-3" placeholder="Enter your email"
             onChange={(event)=>setEmail(event.target.value)}/>
            <input defaultValue={props.rollNoValue} className="form-control my-3" placeholder="Enter your rollNo"
             onChange={(event)=>setRollNo(event.target.value)}/>
            <button onClick={handleClick} class="btn btn-success d-block mx-auto my-3" type="submit">{props.children}</button>
        </div>
    )
}

export default StudentForm