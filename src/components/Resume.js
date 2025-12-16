import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
    const config = {
        link: 'https://drive.google.com/file/d/1Vx9u6Nb0cev_8Opm7cWKd4qjWOqTfPqZ/view?usp=sharing'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[300px] ' src={ResumeImg}></img>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[135px] font-bold'>Resume</h1>
                <p className='text-white pb-5 text-justify'>You can view my resume <a className='btn' target='_black' href={config.link}>Download</a> </p>
            </div>

        </div>
    </section>
}