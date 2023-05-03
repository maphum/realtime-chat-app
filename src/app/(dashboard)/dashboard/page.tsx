import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/ui/Button'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
const inter = Inter({ subsets: ['latin'] })

export default async function page() {
    const session = await getServerSession(authOptions);

    return <pre>{JSON.stringify(session)}</pre>
}
