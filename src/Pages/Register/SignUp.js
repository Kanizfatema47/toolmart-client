import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../Shared/Hook/useToken';


const SignUp = () => {
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();
      

      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
      const [token] = useToken(user || gUser)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
        if(token){
            navigate('/')
        }
    };
    return (
        <div>
            <div className="card  mx-auto text-center bg-base-100 shadow-xl lg:w-4/12 sm:w-96">
                <div className="card-body ">
                    <h2 className="card-title text-center mx-auto my-">Create New Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* name */}

                        <div className="form-control w-full max-w-xs mx-auto text-center">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>

                            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }

                                })} />


                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red">{errors.name.message}</span>}

                            </label>
                        </div>
                        <input />

                        {/* email */}
                        <div className="form-control w-full max-w-xs mx-auto text-center mt-[-35px]">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>

                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provied a valid email'
                                    }
                                })} />


                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red">{errors.email.message}</span>}

                            </label>
                        </div>
                        <input />

                        {/* password */}

                        <div className="form-control w-full max-w-xs mx-auto text-center mt-[-35px]">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>

                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 character and longer"
                                    }
                                })} />


                            <label className="label">
                                <span className="label-text-alt">Forget Password?</span>
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red">{errors.password.message}</span>}

                            </label>
                        </div>
                        <input className='btn w-full max-w-xs uppercase' type="submit" value="Sign Up" />
                    </form>
                    <p>New?<Link className='' to='/signin'>Sign In now </Link> </p>

                    <div className="divider">OR</div>
                    <div className=" rounded-box place-items-center ">
                        <button onClick={() => signInWithGoogle()} className="btn text-black bg-transparent w-full  hover:text-white">SignIn with Google</button>

                    </div>

                </div>
            </div>
        </div>
    )
};

export default SignUp;