import { useForm } from 'react-hook-form';
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors , isSubmitting},

  }=useForm();

    // Basically ek api simulate kari hai 
   const onSubmit = async (data) => {
    await new Promise((resolve) => 
      setTimeout(resolve, 5000)
    );
   }
  //  const  onSubmit= as(data)=>{
  //   console.log("Form submit hjoo chuka hai ", data);
  // }
  
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> First Name : </label>
        <input {...register('firstName',
          {
            required:true,
            minLength:{value:3 , message:'Kam se kam 3 lenght honi chaiye'},
            maxLength:{value:15 , message:'15 se zayda ki lenght nahi hopni chaiye'}
          }
        )}/>
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <br/>

      <div>
        <label> Middle  Name : </label>
        <input {...register('middlename')}/>
      </div>
      <br/>
      <div>
        <label> Last Name : </label>
        <input {...register('lastname')}/>
      </div>

      <br/>


      <input type='submit' disabled={isSubmitting} 
      value={isSubmitting?"hooraha hai":"submit"}/>
   </form>
  )
}

export default App
