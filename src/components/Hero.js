import HeroImag from '../assets/hero.png';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
export default function Hero() {
    const config = {
        subtitle: 'Im a Software Developer',
        social: {
            linkedin:'https://www.linkedin.com/in/developer-parthiban/',
            github:'https://github.com/GITHUBparthiban'
        }
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='w-1/2 text-white text-5xl font-hero-font' >Hi, <br /> I'm Parthiban S
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10 '>
            <a href={config.social.linkedin} target='_black' className='pr-5 hover:text-white'><AiOutlineLinkedin size={35} /></a>
            <a href={config.social.github} target='_black' className='hover:text-white'><FaGithub size={35}/></a>
        </div>
        </div>
        
        <img className='md:w-1/3' src={HeroImag}>

        </img>

    </section>
}