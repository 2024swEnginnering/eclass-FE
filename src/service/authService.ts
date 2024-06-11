import instance from "./axios";

const login = async (userId: string, password: string) => {
  const response = await instance.post("/auth/login", {
    id: userId,
    password: password,
  });

  localStorage.setItem("accessToken", response.data.token);

  return response.data;
};

const logout = () => {
  localStorage.removeItem("accessToken");
};

export { login, logout };
