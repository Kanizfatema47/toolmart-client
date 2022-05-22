import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='my-16'>
            <div className="card  mx-auto text-center bg-base-100 shadow-xl lg:w-4/12 sm:w-96">
                <div className="card-body ">
                    <h2 className="card-title text-center mx-auto my-">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs mx-auto text-center">
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
                        <input className='btn w-full max-w-xs uppercase' type="submit" value="Login" />
                    </form>
                    <p>Already have an account?<Link className='' to='/signUp'>Create New Account </Link> </p>

                    <div className="divider">OR</div>
                    <div className=" rounded-box place-items-center ">
                        <button  className="btn text-black bg-transparent w-full  hover:text-white">SignUp with Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;