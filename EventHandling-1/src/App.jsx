
import './App.css'

function App() {


  const handleclick=()=>{
    alert("Bhai tune muje click kar diya hai ")
  }
  const handlemouse=()=>{
    alert("Mouse mhumare para tag ke upar hai ")
  }

  const handleOnChange=(e)=>{
    console.log("What is written :", e.target.value);
  }
 

  return (   

    <div className='main-div'>

      <form style={{margin:"1.5rem" , borderRadius:"15px"}}>
        <input type="text"  onChange={handleOnChange}/>
      </form>

      <button className='click-btn' onClick={handleclick}>Click me</button>

      <p style={{ padding:"0.7rem" , borderRadius:"15px", backgroundColor:"#e6e6e6"}}
      onMouseOver={handlemouse}
      >This is the area of the paragraph tag </p>
    </div>
  )
}

export default App
