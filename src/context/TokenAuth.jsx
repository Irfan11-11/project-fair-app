import { createContext, useEffect, useState } from "react";
export const tokenAuthContext = createContext()


function TokenAuth({ children }) {
    const [isAtherised, setIsAutherised] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setIsAutherised(true)
        } else {
            setIsAutherised(false)
        }
    }, [isAtherised])

    return (
        <>
            <tokenAuthContext.Provider value={({ isAtherised, setIsAutherised })}>
                {children}
            </tokenAuthContext.Provider>
        </>
    )
}

export default TokenAuth