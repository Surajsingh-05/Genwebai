import react, { useState } from 'react'
import {motion} from "motion/react"
import LoginModal from '../components/loginmodel.jsx'


function Home (){

    const highlights=[
        "AI Generated Code",
        "Fully Responsive Layouts",
        "Production Ready Output",
    ]

    const [openLogin, setOpenLogin]=useState(false)

    return(
        <div className='relative min-h-screen bg-[#040404] text-white overflow-hidden'>
            <motion.div 
            initial={{y:-40, opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.5}}
            className='fixed top-0 left-0 right-0 z-50 backdrop-blur-x1 bg-black/40 border-b border-white/10'>

                   <div className='max-w-7*1 max-auto px-6 py-4 flex justify-between items-center'>
                    <div className='text-lg font-semibold'> 
                      
                        Genweb.ai
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer'>
                            pricing
                        </div>   
                        <button className='px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm'
                        onClick={()=>setOpenLogin(true)}
                        >
                            Get Started
                        </button>

                    </div>

                   </div>
            </motion.div>
            <section className='pt-44 pb-32 px-6 text-center'>
                <motion.h1 
                 initial={{opacity:0,y:40}}
                 animate={{opacity:1,y:0}}
                 className='text-5xl md:text-7*1 font-bold tracking-tight '
                >
                    Build Stunning Websites <br></br>
                    <span className='bg-linear-to-r font-purple-400 to-blue-400 bg-clip-text text-transparent'> With Ai</span>
                    </motion.h1>

                    <motion.p
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}}
                    className='mt-8 max-w-2*1 mx-auto text-zinc-400 text-lg'
                    >
                        Describe your idea and let AI generate a mordern,
                        responsive, production-ready website.
                    </motion.p>
                   
                        <button className='px-7 py-4 rounded-1x bg-white text-black font-semibold hover:scale-105 mt-11 rounded-full'> Get Started</button>
                  

            </section>
            <section className='max-w-7*1 mx-auto px-6 pd-32' >
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
                 {highlights.map((h,i)=>(

                    <motion.div
                    key={i}
                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1, y:0}}
                    className='rounded-2*1 bg-white/5 border border-white/10 p-8'
                    >
                        <h1 className='text-xl font-semibold mb-3'>{h}</h1>
                        <p className='text-sm text-zinc-400'> GenWeb.ai build real website - clean code,
                            animations, responsiveness and scalable structure.
                        </p>
                    </motion.div>

                 ))}
                </div>

            </section>
            <footer className='border-t border-white/10 py-20 text-center text-sm text-zinc-500'>
                &copy; {new Date().getFullYear()} GenWeb.ai
            </footer>

            {openLogin && <LoginModal open={openLogin} onClose={() => setOpenLogin(false)}/>}
          
        </div>
    )
}

export default Home