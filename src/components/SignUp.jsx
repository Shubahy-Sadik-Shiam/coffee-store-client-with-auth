import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {

  const {createUser} = useContext(AuthContext)
  const handleSignUp = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
    .then(result=> {
      console.log('user created at firebase', result.user);
      const createdTime = result?.user?.metadata?.creationTime
      const newUser = {name, email, createdTime}
      // save new user info to the database
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
      .then(res=>res.json())
      .then(data=> {
        console.log(data);
        if(data.insertedId){
          alert("user created successful")
        }
      })
    })
    .catch(error=>console.log(error))
  }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;