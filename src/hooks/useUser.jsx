import { createContext, useContext, useState, useEffect } from 'react';
import { getToken, removeToken, setToken } from '../utils/helper';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFrappeGetCall } from 'frappe-react-sdk';
import { getTier } from '../client/api';

const userContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const { mutate } = useFrappeGetCall('headless_e_commerce.api.get_profile', {}, 'user-profile', {
        isOnline: () => getToken(),
        onSuccess: (data) => {
            setUser(prevUser => ({ ...prevUser, ...data.message }))
            getTier({ customer: data.message.name })
                .then((res) => setUser(prevUser => ({ ...prevUser, tier: res })))
        }
    })

    useEffect(() => {
        mutate();
    }, [mutate, location]);


    const login = async (usr, pwd) => {
        try {
            return fetch("https://dev.honda.zaviago.com/api/method/frappeauth_app.authentication.login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    usr: usr,
                    pwd: pwd,
                }),
            }).then((response) => response.json()).then((data) => {
                if (data.message.token) {
                    setToken(data.message.token);
                    mutate()
                }
                return data;
            })

        } catch (error) {
            return error;
        }
    };

    const logout = async () => {
        setUser(null);
        removeToken();
        navigate("/login");
    };

    return <userContext.Provider value={{
        user,
        login,
        logout,
        refetch: mutate
    }}>
        {children}
    </userContext.Provider>
}

export const useUser = () => useContext(userContext);