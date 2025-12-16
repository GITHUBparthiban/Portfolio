import websiteImg1 from '../assets/guess_myNumber.png';
import websiteImg2 from '../assets/whats_app_project.png';
import websiteImg3 from '../assets/ticket_booking_project.png';

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'A simple and interactive Movie Ticket Booking web application built using HTML, CSS, and JavaScript.',
                link: 'https://github.com/GITHUBparthiban/ticket-booking-main'
            },
            {
                image: websiteImg2,
                description: 'This is a simple front-end project that recreates the look and feel of the WhatsApp application interface using only HTML and CSS.',
                link: 'https://github.com/GITHUBparthiban/what-s-app'
            },
            {
                image: websiteImg3,
                description: 'A simple and fun Number Guessing Game built using HTML, CSS, and JavaScript.',
                link: 'https://github.com/GITHUBparthiban/Guess_My_Number'
            }
        ]
    }

    return <sections className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[135px] font-bold'>Projects</h1>
                <p>These are some of my best projects. I have built these with React.js, JavaScript, HTML and TailwindCSS. check this out</p>
            </div>

        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-10'>
                {config.projects.map((project) => (
                    <div className='relative'>
                        <img className='w-[400px] h-[300px]' src={project.image}></img>
                        <div className='project-dec'>
                            <p className='text-center py-5 px-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_black' href={project.link}>View Project</a>
                            </div>
                        </div>

                    </div>
                ))}


            </div>

        </div>

    </sections>
}