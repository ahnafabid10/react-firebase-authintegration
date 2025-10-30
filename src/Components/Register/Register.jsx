// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router';
// import { auth } from '../../Firebase/Firebase.init';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { use } from 'react';
// import { AuthContext } from '../../main';

const Register = () => {



  const {createUser} = use(AuthContext)


  const handleRegister =(event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value

    createUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  }

    // const handleRegister = (event) =>{
    //     event.preventDefault();
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     console.log(email, password)

    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result =>{
    //         console.log(result)
    //     })
    //     .catch(error =>{
    //         console.log(error)

    //     })
    // }



    return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Register now!</h1>
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="name" name='name' className="input" placeholder="Your Name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* Password Field */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <p>Already have an account? Please <Link className='text-blue-500 hover:text-blue-800' to='/login'>Login</Link></p>
      </div>
    </div>
    );
};

export default Register;