import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/thunks/authThunks"; // Import loginUser thunk
import { RootState } from "../../app/store";
import { setUserDetails } from "@/features/user/userSlice.ts";
import TopBar from "../shared/TopBar";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "../shared/TextInput.tsx";
import { useNavigate } from "react-router-dom";
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
const Login: React.FC = () => {
  const navigate=useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isValid,isSubmitSuccessful,isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const error = useSelector((state: RootState) => state.auth.error);

  const onSubmit = async (data) => {
    console.log(data);
    const { email, password } = data;
     dispatch(loginUser({ email, password }));
     dispatch(setUserDetails({email,password}))
    console.log(isAuthenticated);
    
    // redirect to another page
  };
  useEffect(()=>{
    if (isAuthenticated) {
      navigate("/principal")
  }
  },[isSubmitSuccessful,isAuthenticated])

  return (
    <div className=" flex flex-col min-h-screen">
      <TopBar page="Login" />
      <div className=" flex flex-col  items-center  flex-grow gap-20 py-20  ">
        <div className=" flex flex-row gap-12 justify-center items-center">
          <img src="./Logo.svg" alt="logo" />
          <h1 className=" text-itconfig-blue-dark text-8xl font-[800] font-inter">
            IT Config
          </h1>
        </div>
        <div className=" w-[600px] space-y-8">
          <form className=" min-w-3xl space-y-4">
            <TextInput
              type="email"
              label="> Enter your email address:"
              placeholder="Email"
              control={control}
              name="email"
            />
            <TextInput
              type="password"
              label="> Enter your password:"
              placeholder="password"
              control={control}
              name="password"
            />
          </form>
          <div className=" w-full flex flex-row justify-end">
            <button
              onClick={handleSubmit(onSubmit)}
              className=" bg-itconfig-mauve  text-3xl font-roboto text-itconfig-blue-dark px-8 py-4 rounded-md"
              disabled={!isValid}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>
          {error && (
            <p className="text-2xl text-red-600  text-green-400 font-mono  rounded-lg">
              {`> ${error}`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

// const dispatch = useDispatch();
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
// const isLoading = useSelector((state: RootState) => state.loading.isLoading);
// const error = useSelector((state: RootState) => state.auth.error);

// const handleLogin = () => {
//     dispatch(loginUser({ email, password })); // Dispatch loginUser thunk
// };
// <input
// type="email"
// placeholder="Email"
// value={email}
// onChange={(e) => setEmail(e.target.value)}
// />
// <input
// type="password"
// placeholder="Password"
// value={password}
// onChange={(e) => setPassword(e.target.value)}
// />
// <button onClick={handleLogin} disabled={isLoading}>
// {isLoading ? 'Logging in...' : 'Login'}
// </button>

// {error && <p style={{ color: 'red' }}>{error}</p>}

// {isAuthenticated && <p>Login successful!</p>}
