import React , {useState} from 'react'
const Register = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        contact: ""
    })

    let name, value
    const handleChange = (e) =>{

        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})

    }

    const postData=async(e)=>{

        e.preventDefault();
        const{name,email,contact}=user;
        const res=await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,contact 

            })
        })
        console.log(name,email,contact);

        const data=await res.json();

        if(!data){
            window.alert("invalid data");
        }else{
            window.alert("succesful")
            // console.log("success register")
        }
    }

//register function 
//    const egister = ()=>{
//    const {name,email,password} = user
//    if (name && email && password){
//     axios.post("http://localhost:6969/Register",user )
//     .then(res=>console.log(res))
//    }
//    else{
//        alert("invalid input")
//    };



    return (
        <>
            
        <form method='POST'>
            <label>
                Name:
                <input type="text" name="name" 
                    value={user.name}
                    onChange={handleChange} />
                     <input type="text" name="email" 
                    value={user.email}
                    onChange={handleChange} />
                     <input type="number" name="contact" 
                    value={user.contact}
                    onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={postData} />
            </form>
            

        </>
    )
//}
}

export default Register