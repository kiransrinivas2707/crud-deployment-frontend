import {useState,useEffect} from "react";
import Axios from "axios";
import StudentListRow from "./StudentListRow";

function StudentList(){
    const [arr,setArr] = useState([])
    useEffect(()=>{
        Axios.get("https://crud-deployment-backend-35xx.onrender.com/studentRoute")
        .then((res)=>{
            if(res.status===200){
                setArr(res.data)
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])

    const ListItems =()=>{
        return arr.map((value,index)=>{
            return <StudentListRow key={index} obj={value} />
        })
    }
    return(
        <table style={{maxWidth:"40%"}} class="mx-auto table table-success table-striped table-bordered">
            <thead>
            <tr style={{backgroundColor:"forestgreen"}}>
                <th class="text-center">Name</th>
                <th class="text-center">Email</th>
                <th class="text-center">Roll Number</th>
                <th class="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
                {ListItems()}        
            </tbody>
        </table>
    )

}

export default StudentList;