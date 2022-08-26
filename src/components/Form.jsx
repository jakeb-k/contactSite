import {useState, useEffect} from "react";
import axios from "axios";






function Form() {
    
    
    const [formActive, setButtonActive] = useState({
        active : false
    })
    const [formNote, setFormNote] = useState({
          name: "",
          email: ""
          })
    useEffect(() => {
        
    getNotes()
        } ,[])
    function getNotes() {
    axios({
        method: "GET",
        url:"contact/",
        }).then((response)=>{
        
        
        }).catch((error) => {
        if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}
    
    function createNote(event) {
        axios({
        method: "POST",
        url:"contact/",
        data:{
            name: formNote.name,
            email: formNote.email
        }
        })
        .then((response) => {
            getNotes()
        })

        setFormNote(({
        name: "",
        email: ""}))
        
        event.preventDefault()
        setButtonActive(({
            active: false
        }))
        
}
    function handleChange(event) { 
        const {value, name} = event.target
        setFormNote(prevNote => ({
            ...prevNote, [name]: value})
        )
   }
   function buttonActive(event){
       if(formNote.name !=='' || formNote.email !==''){
       setButtonActive(({
                active: true
            }))
        }else {
            setButtonActive(({
                active: false
            }))
        }
        
   }
 

    
    
  return (
    <div className='form'>
        <form className="create-note">
            <h1>Stay Up To Date</h1>
            <input onChange={handleChange} onFocus={buttonActive} text={formNote.name} name="name" placeholder="Name" value={formNote.name} />
            <input onChange={handleChange} onFocus ={buttonActive} name="email" placeholder="Email" value={formNote.email} />
            <input type="hidden" name="csrfmiddlewaretoken" value='' />
            <button onClick={createNote} className={formActive.active ? 'buttonActive':'formButton' }  >
                Subscribe
            </button>
        </form>
    </div>
  );
}



export default Form;