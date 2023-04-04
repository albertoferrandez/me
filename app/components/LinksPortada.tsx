import UseAnimations from 'react-useanimations'
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'
import download from 'react-useanimations/lib/download'
import Link from 'next/link'

const LinksPortada = () => {
    return (
        <div className='flex flex-col items-center justify-center md:flex-row md:gap-8 mt-8' role='group'>
            <a href='https://github.com/albertoferrandez' target='_blank' className='inline-flex items-center font-medium mt-4'>
                <UseAnimations animation={github} size={24} strokeColor='#cbd5e1' className='mr-1'/>
                <h2 className='font-extrabold text-xs md:text-sm text-slate-300 mr-1'>GITHUB</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ease-out duration-300 opacity-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </a>
            <a href='https://www.linkedin.com/in/albertoferrandezmiralles/' target='_blank' className='inline-flex items-center font-medium text-slate-300 mt-4'>
                <UseAnimations animation={linkedin} size={24} strokeColor='#cbd5e1' className='mr-1'/>
                <h2 className='font-extrabold text-xs md:text-sm text-slate-300 mr-1'>LINKEDIN</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ease-out duration-300 opacity-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </a>
            <Link href='/AlbertoFerrandezCV.pdf' target='_blank' download  className='inline-flex items-center font-medium text-slate-300 mt-4'>
                <UseAnimations animation={download} size={24} strokeColor='#cbd5e1' className='mr-1'/>
                <h2 className='font-extrabold text-xs md:text-xs text-slate-300 mr-1'>CURRICULUM</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ease-out duration-300 opacity-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </Link>
        </div>
    )
}

export default LinksPortada
