import AboutImg from '../assets/about.png';

export default function About() {
    const config = {
        line1 :'I’m a Software Developer who loves building practical and scalable web solutions. With over 2 years of experience in React.js, JavaScript, jQuery, Tailwind CSS, Bootstrap, ApexCharts, and PHP.',
        line2 : 'I’ve worked on HR and payroll systems, invoice automation tools, compliance automation solutions, HR attendance and leave management UIs, and employee onboarding form systems.',
        line3 : 'I enjoy writing clean code, optimizing performance, and collaborating in agile teams.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg}></img>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='text-white pb-5 text-justify'>{config.line1} </p>
                <p className='text-white text-justify pb-5'>{config.line2} </p>
                <p className='text-white text-justify'>{config.line3}</p>
            </div>

        </div>
    </section>
}