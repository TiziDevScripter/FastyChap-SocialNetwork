import Loader from "@/components/shared/Loader"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createUserAccount } from "@/lib/appwrite/api"
import { SignupValidations } from "@/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import * as z from "zod"


const SignupForm = () => {
    const isLoading = false;

    // 1. Define your form.
    const form = useForm<z.infer<typeof SignupValidations>>({
        resolver: zodResolver(SignupValidations),
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: ''
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof SignupValidations>) {
        const newUser = await createUserAccount(values)
        console.log(newUser)
    }

    return (
        <>
            <Form {...form}>
                <div className="sm:w-420 flex-center flex-col">
                    <div className="flex-center flex-col w-full">
                        <img src="/public/assets/images/logo.svg" alt="logo" />

                        <h2 className="h3-bold md:h2-bold pt-5 md:pt:10">Create your account</h2>
                        <p className="text-light-3 small-medium md:base-regular mt-2">To use FastyChap you have to enter your details.</p>
                    </div>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 mt-3 w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="John, Michel, Ana, ..." className="text-violet-400 shad-input" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="John777, MichTK, AnyJDp0, ..." className="text-violet-400 shad-input" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="John777@gmail.com, ..." className="text-violet-400 shad-input" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="passwordexample41937" className="text-violet-400 shad-input" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="shad-button_primary">
                            {isLoading ? (
                                <div className="flex-center gap-2"><Loader /> Loading...</div>
                            ) : 'Sign up'}
                        </Button>
                        <p className="text-small-regular text-light-2 text-center mt-1">
                            Already have an account?
                            <Link to="/sign-in" className="text-primary-500 ml-1">Log in</Link>
                        </p>
                    </form>
                </div>
            </Form>
        </>
    )
}

export default SignupForm