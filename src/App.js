import React,{useEffect,useState} from "react";
import "./style.css";


export default function App() {
  
  const url = "https://api.github.com/users";

  const [users,setUsers] = useState([]);
  const getUsers = async() =>{
     const response = await fetch(url);
     const users = await response.json();
     setUsers(users)
     console.log(users)
  }
  useEffect (()=>{
    getUsers()
  },[])
  
  return (
    <>
    <ul>
    {
        users.map((user) => {
          const{id,login,avatar_url,html_url} = user;
          return(
            <li key={id}>
              
            </li>
          )
        })
    }
     </ul> 
      
    </>
  );
}
