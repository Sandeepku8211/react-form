
import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData]=useState({firstName:'',lastName:'',email:"",comments:'',isvisiable:true,radiobutton:true});

  function changeHandler(event){
    setFormData({...formData,[event.target.name]:event.target.value});
    
  }
  function submithandler(event){
   event.preventDefault();
   console.log(formData)
  }


  
  return (
    <div className="App">
      app
      <form action="" onSubmit={submithandler}>
<input type="text" placeholder='First name' onChange={changeHandler} name='firstName' value={formData.firstName}/>
<br /><br />
<input type="text" placeholder='Last Name' onChange={changeHandler} name='lastName'  value={formData.lastName}/>

<br /><br />
<input type="email" name="email" onChange={changeHandler} id="" value={formData.email} />

<br /><br />
<textarea type="text" name='comments' placeholder='enter your comment' value={formData.comments} onChange={changeHandler}/>
<input type="checkbox" name="isvisiable" id="isvisiable" value={formData.isvisiable} onChange={changeHandler}

checked={formData.isvisiable}

 />
 <label htmlFor="isvisiable"> i am human</label>

 <input type="radio" name="radiobutton" id="radiobutton" onChange={changeHandler}/>
 <label htmlFor="radiobutton">form is submit</label>
 <input type="radio" name="radiobutton" id="" />

<button type='submit' >submit</button>
      </form>
    </div>
  );
}

export default App;
