import React from "react";
import ReactDOM from "react";
import { useEffect,useState } from "react";
import axios from "axios";
function Table(){
    const [data,setdata]=useState([{
        "id": 1,
        "body": "some comment",
        "postId": 1
      },{
        "id": 1,
        "body": "some comment",
        "postId": 1
      },{
        "id": 1,
        "body": "some comment",
        "postId": 1
      }])
    /*useEffect(()=>{
        axios.get("http://localhost:3031/comments")
        .then(res=>{
            console.log(res.data);
            setdata(res.data)})
        .catch(err=>console.log(err))
    },[])*/
    return(<>
    
    <table>
        <thead>
            <tr><th>id</th>
            <th>post</th>
            <th>postid</th></tr>
        </thead>
        <tbody>
            
                {data.map((d,i)=>{
                    return <tr key={i}>
                        <td>{d.id}</td>
                    <td>{d.body}</td>
                    <td>{d.postId}</td></tr>
                })}
            
        </tbody>
    </table>
    </>);
}
export default Table;