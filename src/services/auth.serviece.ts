import { LoginFormData } from "@/types/login.type";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  image?: string;
}) => {
  const response = await fetch("http://localhost:4000/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const loginUser = async (data: LoginFormData) => {
  const response = await fetch("http://localhost:4000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  return response.json();
};
