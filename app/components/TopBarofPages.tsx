import { HomeIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const TopBarofPages = ({ children }: Props) => {
  return (
    <div className="flex items-center">
        <Link href={"/"}>
          <HomeIcon className="h-8 w-8 text-slate-300 mr-4" />
        </Link>
        <span className="mx-4 text-slate-300"> - </span>
        <motion.h1
          className="text-slate-300 text-4xl"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, ease: 'anticipate' }}
        >
          { children }
        </motion.h1>
      </div>
  )
}

export default TopBarofPages
