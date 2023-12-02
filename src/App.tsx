import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
function App() {
    return (
        <>
            <main className='flex h-screen bg-pink-100'>
                <Routes>
                    {/* public routes */}
                    <Route element={<AuthLayout />}>
                        <Route path='/sign-in' element={<SigninForm />}></Route>
                        <Route path='/sign-up' element={<SignupForm />}></Route>
                    </Route>

                    {/* private routes */}
                    <Route element={<RootLayout />}>
                        <Route index element={<Home />}></Route>
                    </Route>
                </Routes>
            </main>
        </>
    )
}
export default App