import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("username")  || null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [role, setRole] = useState(localStorage.getItem("role") || null);

    const data = { user, setUser, role, setRole, token, setToken };

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}