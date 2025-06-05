"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform login logic here
      router.push("/");
    }
  };

  return (
    <>
      <div className="my-5 grid grid-cols-1 gap-4 px-4 md:mt-8 md:grid-cols-2 md:gap-10 md:px-3.5">
        <div className="pl-0 md:pl-24">
          <h1 className="varela-round-regular text-[1rem] text-[#000000df] md:text-[2.15rem]">
            Welcome To True FX Path 👋
          </h1>
          <h1 className="mukta-extralight pt-3 pb-2 text-[1rem] tracking-wide text-[#000] md:text-[2.5rem]">
            Let the Journey Begin!
          </h1>
          <p className="text-[0.9rem] font-semibold text-[#5D5D5D] md:text-[1.2rem]">
            Unlock a world of career with a single click!{" "}
          </p>
          <p className="text-[0.9rem] font-semibold text-[#5D5D5D] md:text-[1.2rem]">
            Please login in to your account.
          </p>
          <form onSubmit={handleSubmit} className="pt-10 pr-0 md:pr-28">
            <div className="mb-4">
              <label className="mb-1 block font-medium">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border-2 border-[#D4D7E3] p-3 outline-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-[#D4D7E3]">{errors.email}</p>
              )}
            </div>

            <div className="relative mb-4">
              <label className="mb-1 block font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg border-2 border-[#D4D7E3] p-3 pr-10 outline-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute top-11 right-3 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
              {errors.password && (
                <p className="mt-1 text-sm text-[#D4D7E3]">{errors.password}</p>
              )}
            </div>

            <div className="flex justify-end py-1 pb-5 text-[0.9rem] text-[#1E4AE9] md:text-[1.1rem]">
              <a href="/#">Forgot Password</a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#0070BA] py-3 text-white transition hover:bg-blue-700"
            >
              Login
            </button>
            <div className="my-10 flex items-center">
              <hr className="flex-grow border-[#CFDFE2]" />
              <span className="mx-4 text-[0.9rem] text-[#294957] md:text-[1.3rem]">
                or
              </span>
              <hr className="flex-grow border-[#CFDFE2]" />
            </div>
            <p className="text-[0.9rem] md:text-[1.15rem] font-semibold text-[#313957] py-3 text-center">Don't you have an account? <span className="text-[#0070BA]"><Link href="/Sign-up">Sign up</Link></span></p>
          </form>
        </div>
        <div className="object-cover">
          <img src="/image/icon/Login Art.svg" alt="Login" className="" />
        </div>
      </div>
    </>
  );
};

export default Login;
