import React, { useState } from 'react'
import profile from '../assets/profile.jpeg'
import lavender from '../assets/clipart lavender.jpg'
import mic from '../assets/mic.jpeg'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { purple } from '@mui/material/colors';

const Home = () => {
    const steps = ["Signup / Signin", "Register for Journalism Course", "Start learning!"];
    const aboutme = [{
        "id": 1,
        "heading": "Award-Winning Investigative Journalist",
        "content": "I, Arun, have been recognized for my groundbreaking investigative reporting, uncovering corruption scandals and bringing about positive change in society. His expertise in investigative journalism can enrich the course curriculum by sharing real-world case studies and teaching students effective investigative techniques. My insights will empower aspiring journalists to pursue stories with integrity and diligence, ultimately fostering a culture of accountability and transparency."
    },
    {
        "id": 2,
        "heading": "Published Author",
        "content": "As the author of several acclaimed books on journalism and media ethics, I bring a wealth of knowledge and scholarly expertise to the course. My experience in writing and publishing can inspire students to develop their own unique voices and craft compelling narratives.Through workshops and mentorship sessions, I can guide students in refining their writing skills, structuring their stories effectively, and navigating the publishing industry. My mentorship will empower students to become confident storytellers and thought leaders in the field of journalism"
    },

    {
        "id": 3,
        "heading": "Media Entrepreneur",
        "content": "I have successfully launched and managed my own media ventures, demonstrating my entrepreneurial acumen and innovative spirit. My experience in building media platforms and engaging audiences across diverse channels can provide valuable insights to students aspiring to enter the ever-evolving media landscape. Through guest lectures and interactive sessions, I can share strategies for digital content creation, audience engagement, and monetization, equipping students with the skills and mindset needed to thrive in today's digital age. "
    },
    {
        "id": 4,
        "heading": "Dedicated Mentor and Educator",
        "content": "Throughout my career, I have been committed to nurturing the next generation of journalists and media professionals. As a dedicated mentor and educator, I have mentored countless students and aspiring journalists, guiding them towards success and empowering them to achieve their goals."
    }];
    const faq = [{
        "q": "Is this course suitable for beginners?",
        "a": "Yes, this course is suitable for beginners who are interested in learning the fundamentals of journalism."
    },
    {
        "q": "What topics are covered in the course curriculum?",
        "a": "The course covers a wide range of topics including journalistic ethics, news writing, investigative reporting, multimedia journalism, and more."
    },
    {
        "q": "Are there any prerequisites for enrolling in the course?",
        "a": "There are no specific prerequisites for enrolling in the course. However, a passion for storytelling and a curiosity for uncovering the truth are highly encouraged."
    },
    {
        "q": "Will I receive a certificate upon completion of the course?",
        "a": "Yes, participants who successfully complete the course will receive a certificate of completion."
    },
    {
        "q": "Are there any assignments or assessments during the course?",
        "a": "Yes, participants will be required to complete assignments and projects throughout the duration of the course to reinforce their learning."
    }
    ]

    const [visible, setVisible] = useState(false)

    return (
        <div className="w-full bg-slate-100">


            <div className='bg-purple-100 flex w-full h-96'>
                <div className='w-full p-20 flex flex-col gap-5'>
                    <h1 className='text-purple-800 text-6xl font-bold'>Embark on Your Journalism Journey</h1>
                    <h1 className='text-purple-800 font-semibold'>Join my Exclusive 2-Week Course Today!</h1>
                    <img src={mic} className='w-40 h-40 rounded-lg' />
                </div>
                <div className='flex flex-row-reverse w-full'>
                    <div>
                        <img src={lavender} className='rounded-full' />
                    </div>
                </div>
            </div>


            <div className='w-full mt-32'>
                <Stepper alternativeLabel>
                    {steps.map((item, index) => (
                        <Step key={index} active={true} sx={{
                            '& .MuiStepLabel-root .Mui-completed': {
                                color: 'secondary.dark', // circle color (COMPLETED)
                            },
                            '& .MuiStepLabel-root .Mui-active': {
                                color: 'secondary.main', // circle color (ACTIVE)
                            },
                            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                            {
                                color: 'secondary.main', // Just text label (ACTIVE)
                            },
                            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                                fill: 'common.white', // circle's number (ACTIVE)
                            },
                        }}>
                            <StepLabel>{item}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>


            <div className='my-28 items-center justify-center relative flex'>
                <div className='my-20 bg-purple-200 w-full h-10 absolute z-0 shadow-gray-400 shadow-md'></div>
                <div className='mx-20 flex gap-20 justify-center'>
                    <div className='z-10 w-full shadow-lg shadow-gray-500 flex flex-col bg-purple-900 text-zinc-200 p-5 rounded-xl gap-5'>
                        <div className='text-2xl font-bold'>
                            Overview
                        </div>
                        <div className='border-t-[1px] border-t-zinc-400'></div>
                        <div>
                            Join us for an intensive 2-week journey into the dynamic world of journalism.
                            Whether you're a budding journalist eager to kickstart your career or a seasoned
                            professional looking to hone your skills, this course offers a comprehensive exploration
                            of the key principles and practices of modern journalism.
                        </div>
                    </div>
                    <div className='z-10 w-full shadow-lg flex flex-col bg-zinc-200 text-purple-900 p-5 rounded-xl gap-5'>
                        <div className='text-2xl font-bold'>
                            What You'll Learn
                        </div>
                        <div className='border-t-[1px] border-t-purple-900'></div>
                        <div>
                            Foundations of Journalism: Gain a solid understanding of the fundamentals of journalism, including news writing techniques, storytelling principles, and journalistic ethics.
                            Reporting Techniques: Learn essential reporting skills such as conducting interviews, gathering information, and fact-checking to produce accurate and compelling stories.
                        </div>
                    </div>
                    <div className='z-10 w-full shadow-lg flex flex-col bg-zinc-200 text-purple-900 p-5 rounded-xl gap-5'>
                        <div className='text-2xl font-bold'>
                            Course Format
                        </div>
                        <div className='border-t-[1px] border-t-purple-900'></div>
                        <div>
                            Duration: Two weeks of intensive learning and practical training.
                            Schedule: Online classes will be held on weekdays.
                            Final Project: Culminate your learning journey with a capstone project where you'll apply your newfound skills to produce a comprehensive journalistic piece under the guidance of experienced mentors.
                        </div>
                    </div>
                </div>
            </div>

            <div className='m-32 p-6 flex gap-30 items-center justify-between px-20 relative bg-purple-100 rounded-full'>
                <div className='images w-full items-center justify-center'>
                    <div className=' bg-purple-900 -rotate-[20deg] w-64 h-80 absolute top-20 left-20'></div>
                    <div className='bg-cover bg-center w-64 h-80 absolute -rotate-[10deg] top-20 left-20' style={{ backgroundImage: `url(${mic})` }}></div>
                    <div className='bg-cover w-64 h-80 absolute top-20 left-20' style={{ backgroundImage: `url(${profile})` }}></div>
                </div>
                <div className="content w-2/3 flex flex-col gap-10 justify-center pt-10">
                    <div className='text-purple-400 text-3xl font-bold text-right'>Why you should learn with me?</div>
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true, dynamicBullets: true }}
                            loop={true}
                        >
                            {aboutme.map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <div className="flex flex-col gap-2 w-full h-64 text-purple-900 text-right">
                                        <div className='font-bold'>{item.heading}</div>
                                        <div>{item.content}</div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>


            <div className='faqs px-40 w-full'>
                <div className='text-purple-900 text-5xl text-center font-bold'>FAQ ' s</div>
                <div className='my-10 flex flex-col gap-4'>
                    {faq.map((item, index) => (
                        <Accordion key={index} className='p-3'>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{color:purple[900]}}
                            >
                                 <div className='font-semibold text-xl'>{item.q}</div>
                            </AccordionSummary>
                            <AccordionDetails sx={{color:purple[900]}}>
                                     <Typography>{item.a}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>


        </div >

    )
}

export default Home