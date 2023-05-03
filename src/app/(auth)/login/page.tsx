'use client';

import Button from "@/components/ui/Button";
import { FC, useState } from "react";
import { signIn } from 'next-auth/react'
import { toast } from "react-hot-toast";
import { SvgGoogle } from "@/components/ui/svg-google";


const Page: FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState<boolean>(false);
    async function loginWithGoogle() {
        setIsLoading(true);
        try {
            await signIn('google');
        } catch (error) {
            toast.error('Something wrong with your log in');
        } finally {
            setIsLoading(false);
        }
    }
    return <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md flex w-full space-y-8 flex-col items-center ">
                <div className="flex flex-col items-center gap-8">
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 ">Sign in to your account</h2>
                </div>
                <Button isLoading={isLoading}
                    type='button'
                    className="max-w-sm mx-auto w-full"
                    onClick={loginWithGoogle}>
                    {isLoading ? null : (<SvgGoogle />)}
                    Google
                </Button>
            </div>
        </div>
    </>
}

export default Page;
