import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
    const isAuthenticated = false;
    return (
        <>
            {
                isAuthenticated ? (
                    <Navigate to="/" />
                ) : (
                    <>
                        <section className="flex flex-1 justify-center items-center flex-col py-4">
                            <Outlet />
                        </section>
                        <img src="/public/assets/images/side-img.svg"
                            alt="social-app-image"
                            className="hidden xl:block w-1/2 h-screen object-cover bg-no-repeat" />
                    </>
                )
            }
        </>
    )
}

export default AuthLayout