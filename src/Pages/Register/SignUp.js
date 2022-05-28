import React from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import {
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../Shared/Hook/useToken";
import Loading from "../Shared/Loading";





const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, guser, gLoading, gerror] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [token] = useToken(user || guser)


    let errorMessage;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (token) {
        navigate("/");
    }

    const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };
    if (error || gerror) {
        errorMessage = <p className="text-red">{error?.message}</p>;
    }
    return (
        <div className="mt-20 py-20">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center mx-auto my-10 w-2/4 px-5 py-5 shadow-lg"
            >
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {" "}
                                {errors?.email?.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                message: "Provide a valid email", // JS only: <p>error message</p> TS only support string
                            },
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {" "}
                                {errors?.email?.message}
                            </span>
                        )}
                        {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-red-500">
                                {" "}
                                {errors?.email?.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                            minLength: {
                                value: 6,
                                message: "Provide a valid Password", // JS only: <p>error message</p> TS only support string
                            },
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {" "}
                                {errors?.password?.message}
                            </span>
                        )}
                        {errors.password?.type === "minLength" && (
                            <span className="label-text-alt text-red-500">
                                {" "}
                                {errors.password.message}
                            </span>
                        )}
                    </label>
                </div>

                <button type="submit" className="btn w-ful max-w-xs">
                    Register
                </button>
                {errorMessage}
                <p className="text-center">
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-600">
                    Please Login
                </Link>
            </p>
                <div class="flex flex-col w-full border-opacity-50">
                    <div class="divider">OR</div>
                </div>
                <button onClick={() => signInWithGoogle()} className="btn btn-accent">
                    Register with Google
                </button>

            </form>
           
        </div>
    );
};

export default SignUp;

















// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import useToken from '../Shared/Hook/useToken';


// const SignUp = () => {

//     const [
//         createUserWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useCreateUserWithEmailAndPassword(auth);
//     const navigate = useNavigate();


//     const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

//     const [updateProfile, updating, updateerror] = useUpdateProfile(auth);


//     const { register, formState: { errors }, handleSubmit } = useForm();

//     const [token] = useToken(user || gUser)
//     if (token) {
//         navigate('/')
//     }
//     const onSubmit =  (data) => {
//         console.log(data)
//         createUserWithEmailAndPassword(data.email, data.password)
//          updateProfile({ displayName: data.name });

//     };
//     return (
//         <div>
//             <div className="card  mx-auto text-center bg-base-100 shadow-xl lg:w-4/12 sm:w-96">
//                 <div className="card-body ">
//                     <h2 className="card-title text-center mx-auto my-">Create New Account</h2>
//                     <form onSubmit={handleSubmit(onSubmit)}>

//                         {/* name */}

//                         <div className="form-control w-full max-w-xs mx-auto text-center">
//                             <label className="label">
//                                 <span className="label-text">Name</span>

//                             </label>

//                             <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs"
//                                 {...register("name", {
//                                     required: {
//                                         value: true,
//                                         message: "Name is required"
//                                     }

//                                 })} />


//                             <label className="label">
//                                 {errors.name?.type === 'required' && <span className="label-text-alt text-red">{errors.name.message}</span>}

//                             </label>
//                         </div>
//                         <input />

//                         {/* email */}
//                         <div className="form-control w-full max-w-xs mx-auto text-center mt-[-35px]">
//                             <label className="label">
//                                 <span className="label-text">Email</span>

//                             </label>

//                             <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"
//                                 {...register("email", {
//                                     required: {
//                                         value: true,
//                                         message: "Email is required"
//                                     },
//                                     pattern: {
//                                         value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                                         message: 'Provied a valid email'
//                                     }
//                                 })} />


//                             <label className="label">
//                                 {errors.email?.type === 'required' && <span className="label-text-alt text-red">{errors.email.message}</span>}
//                                 {errors.email?.type === 'pattern' && <span className="label-text-alt text-red">{errors.email.message}</span>}

//                             </label>
//                         </div>
//                         <input />

//                         {/* password */}

//                         <div className="form-control w-full max-w-xs mx-auto text-center mt-[-35px]">
//                             <label className="label">
//                                 <span className="label-text">Password</span>

//                             </label>

//                             <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
//                                 {...register("password", {
//                                     required: {
//                                         value: true,
//                                         message: "Password is required"
//                                     },
//                                     minLength: {
//                                         value: 6,
//                                         message: "Must be 6 character and longer"
//                                     }
//                                 })} />


//                             <label className="label">
//                                 <span className="label-text-alt">Forget Password?</span>
//                                 {errors.password?.type === 'required' && <span className="label-text-alt text-red">{errors.password.message}</span>}
//                                 {errors.password?.type === 'minLength' && <span className="label-text-alt text-red">{errors.password.message}</span>}

//                             </label>
//                         </div>
//                         <input className='btn w-full max-w-xs uppercase' type="submit" value="Sign Up" />
//                     </form>
//                     <p>New?<Link className='' to='/signin'>Sign In now </Link> </p>

//                     <div className="divider">OR</div>
//                     <div className=" rounded-box place-items-center ">
//                         <button onClick={() => signInWithGoogle()} className="btn text-black bg-transparent w-full  hover:text-white">SignIn with Google</button>

//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// };

// export default SignUp;