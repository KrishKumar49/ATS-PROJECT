import React, { Children, createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
export const UserProvider = ({ Children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setUser({ token });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {Children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);