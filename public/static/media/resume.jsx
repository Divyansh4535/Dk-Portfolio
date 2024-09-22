import React from 'react';

const Resume = () => {
    return (
        <div className="container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg my-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            {/* Header Section */}
            <header className="mb-4 border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wider">Divyanshu Kumar</h1>
                <p className="text-lg text-gray-600">Front-End Developer</p>
            </header>

            {/* Profile Summary Section */}
            <section className="mb-6">
                <h2 className="text-xl font-bold underline text-blue-900 mb-2">Profile Summary</h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                    Passionate fresher front-end developer with knowledge in React.js and experience in building dynamic web applications using Next.js. Proficient in Tailwind CSS for responsive design and TypeScript for scalable code. Knowledgeable in MongoDB and familiar with web programming concepts such as MVC and component-based architecture. Experienced in WordPress theme development, CRM integration, and basic SEO, with a strong focus on delivering high-quality user experiences.
                </p>
            </section>

            {/* Contact Info & Work History Section */}
            <div className="grid md:grid-cols-3 gap-4">
                {/* Contact Section */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold underline text-blue-900 mb-2">Contact</h2>
                    <div className="mb-2">
                        <h3 className="text-md font-semibold text-gray-600">Address</h3>
                        <p className="text-gray-600">Kanpur Nagar, UP 208027</p>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-md font-semibold text-gray-600">Phone</h3>
                        <p className="text-gray-800 font-medium">9305603604</p>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-md font-semibold text-gray-600">E-mail</h3>
                        <p className="text-blue-600 underline hover:text-blue-800 transition-colors">
                            <a href="mailto:divyanshkumar12346@gmail.com">divyanshkumar12346@gmail.com</a>
                        </p>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-md font-semibold text-gray-600">LinkedIn</h3>
                        <p className="text-blue-500 underline hover:text-blue-700 transition-colors">
                            <a href="https://www.linkedin.com/in/divyansh-kumar-1067812" target="_blank" rel="noopener noreferrer">linkedin.com/in/divyansh-kumar</a>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold text-gray-600">GitHub</h3>
                        <p className="text-blue-500 underline hover:text-blue-700 transition-colors">
                            <a href="https://github.com/Divyansh4535" target="_blank" rel="noopener noreferrer">github.com/Divyansh4535</a>
                        </p>
                    </div>
                    <section className="mt-4">
                        <h2 className="text-xl font-bold underline text-blue-900 mb-2">Portfolios</h2>
                        <p className="text-blue-500 underline hover:text-blue-700 transition-colors">
                            <a href="https://dk-portfolio-nu.vercel.app/" target="_blank" rel="noopener noreferrer">https://dk-portfolio-nu.vercel.app/</a>
                        </p>
                    </section>

                    <section className="mt-4">
                        <h2 className="text-xl font-bold underline text-blue-900">Certificates</h2>
                        <ul className="list-disc pl-5">
                            <li>Anuj Bhiya Web Development (Coding Suttle) - 5/23 - 12/23</li>
                        </ul>
                    </section>

                    <section className="mt-4">
                        <h2 className="text-xl font-bold underline text-blue-900 mb-2">Skills</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'CSS3', 'HTML5', 'Bootstrap', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Locomotive', 'GSAP'].map(skill => (
                                <div className="bg-gray-100 p-2 rounded shadow" key={skill}>
                                    <p className="text-sm font-bold">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Work History Section */}
                <div className="md:col-span-2">
                    <section className="mb-4">
                        <h2 className="text-xl font-bold underline text-blue-900 mb-2">Personal Projects</h2>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-600">ChaiTimes (Trending News Website)</h3>
                            <p className="text-gray-600">
                                Developed a responsive news application using React and Tailwind CSS. The app dynamically fetches and displays top news headlines from the News API, categorized by various topics. It includes features like pagination for easy navigation and dynamic document title updates. The responsive navigation bar enhances user experience across different devices. Efficient image handling with fallback options ensures layout stability despite missing images. This project highlights skills in API integration, responsive design, and React component architecture.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-600">Snake Game</h3>
                            <p className="text-gray-600">
                                Developed a classic Snake game using HTML, CSS, and JavaScript. Implemented real-time scoring, collision detection, and keyboard controls for smooth gameplay. Enhanced the game with sound effects, animations, and a rotating snake head to match movement. Utilized local storage for persistent high score tracking.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-600">TastyTrails</h3>
                            <p className="text-gray-500 text-md">Restaurant delivery web app | Developed using Next.js, MongoDB, Node.js</p>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mt-2">
                                <li>Implemented a user-friendly interface for restaurant browsing, filtering, and order tracking.</li>
                                <li>Optimized backend API calls to ensure fast data retrieval and smooth user experience.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-2">
                        <h2 className="text-xl font-bold underline text-blue-900 mb-2">Education</h2>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-600">Bachelor of Science</h3>
                            <p className="text-gray-500 italic">Chhatrapati Shahu Ji Maharaj University, Kanpur, Uttar Pradesh | Expected 2024-01</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-600">Senior Secondary</h3>
                            <p className="text-gray-500 italic">Sardar Patel Inter College, Kanpur, Uttar Pradesh | 2020-01 - 2022-01</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-600">High School</h3>
                            <p className="text-gray-500 italic">Sardar Patel Inter College School, Kanpur, Uttar Pradesh | 2018-01 - 2020-01</p>
                        </div>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-bold underline text-blue-900 mb-2">Personal Qualities</h2>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                            <li>Responsible</li>
                            <li>Team player</li>
                            <li>Quick learner</li>
                            <li>Problem solver</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resume;
