import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/ui/Button'
import { db } from '@/lib/db'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  db.set("nextjs", "is fun")
  return (
    <Button className='ml-10 mt-10' size="lg" variant="ghost" >Hello wrold</Button>
  )
}
