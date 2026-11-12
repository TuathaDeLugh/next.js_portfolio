"use client";

import React from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/Schemas";
import TransitionLink from "@/components/transitions/TransitionLink";

interface LoginFormValues {
  username: string;
  password: string;
}

const initialValues: LoginFormValues = {
  username: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const router = useRouter();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<LoginFormValues>({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (formValues, action) => {
        try {
          const result = await signIn("credentials", {
            redirect: false,
            username: formValues.username,
            password: formValues.password,
          });
          if (result && result.status === 200 && !result.error) {
            toast.success("Authenticated successfully");
            router.push("/admin/dashbord");
          } else {
            toast.error("Invalid credentials");
          }
        } catch (error) {
          console.error("Login Failed:", error);
          toast.error("Authentication failed");
        }
        action.resetForm();
      },
    });

  return (
    <div className="min-h-screen bg-obsidian text-pearl flex flex-col justify-center items-center px-6 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-3xl bg-carbon border border-white/10 shadow-2xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="font-mono text-xs font-bold text-pearl uppercase tracking-wider">
              Management Console
            </span>
          </div>
          <TransitionLink
            href="/"
            className="text-xs font-mono text-pearl-dim hover:text-sky-400 transition-colors"
          >
            ← Return to Index
          </TransitionLink>
        </div>

        <div>
          <h1 className="text-2xl font-extrabold text-pearl tracking-tight">
            Administrator Authentication
          </h1>
          <p className="text-pearl-muted text-xs font-mono mt-1">
            Restricted to portfolio system maintainer.
          </p>
        </div>

        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
          <div>
            <label
              className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
              htmlFor="login-username"
            >
              Operator Identity
            </label>
            <input
              id="login-username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-white/10 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-indigo-400/80 focus:ring-1 focus:ring-indigo-400/40 font-mono transition-all"
            />
            {errors.username && touched.username ? (
              <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.username}</p>
            ) : null}
          </div>

          <div>
            <label
              className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
              htmlFor="login-password"
            >
              Access Passkey
            </label>
            <input
              id="login-password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="••••••••••••"
              className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-white/10 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-indigo-400/80 focus:ring-1 focus:ring-indigo-400/40 font-mono transition-all"
            />
            {errors.password && touched.password ? (
              <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.password}</p>
            ) : null}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-white text-black font-extrabold text-xs font-mono hover:bg-neutral-200 transition-all btn-press shadow-xl shadow-white/10 cursor-pointer"
            >
              Authenticate Session →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
