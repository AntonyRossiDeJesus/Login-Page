"use client";

import { useState } from "react";
import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email("Formato de e-mail inválido."),
  password: z.string().min(8, "mínimo 8 caracteres."),
});

type User = z.infer<typeof UserSchema>;

import { ZodError } from "zod";
import InputForm from "./input";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      UserSchema.parse(formData);

      setFormData({
        email: "",
        password: "",
      });

      alert("Login efetuado com sucesso!");
    } catch (err) {
      if (err instanceof ZodError) {
        const formattedErrors = err.errors.reduce((acc: any, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});
        setErrors(formattedErrors);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <InputForm
            label="E-mail"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
          ></InputForm>
          {errors && <span className="text-red-600">{errors.email}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <InputForm
            label="Senha"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onFocus={handleFocus}
          ></InputForm>
          {errors && <span className="text-red-600">{errors.password}</span>}
        </div>

        <button
          className="w-full p-2 bg-zinc-600 text-white uppercase rounded-md hover:bg-zinc-500 transition-all"
          type="submit"
        >
          entrar
        </button>
      </form>
    </div>
  );
}
