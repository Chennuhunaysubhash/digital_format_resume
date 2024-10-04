/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaCode, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaFileAlt, FaDocker } from 'react-icons/fa';
import './Resume.css';
import profileImage from '/src/images/hunay3.jpg'; // Adjust the path as needed
import oracleLogo from '/src/images/javaCertificate.jpg'; // Update paths accordingly
import sql from '/src/images/sql.jpg';
import java from '/src/images/java.jpg';
import scalerLogo from '/src/images/reactjs.jpg';

const Resume = () => {
    // Personal Information
    const name = "Hunay Subhash Chennu";
    const address = "Dno: 8-179, Sivalayam Street, Dirusumarru, Bhimavaram, West Godavari, Andhra Pradesh, India, Pin: 534239";
    const email = "hunaysubhash97@gmail.com";
    const phone = "+91 8074243933";

    // Certifications
    const [hoveredCertification, setHoveredCertification] = useState(null);
    const certifications = [
        {
            name: 'Oracle Certified Associate, Java SE 8 Programmer',
            issuer: 'Oracle',
            image: oracleLogo,
        },
        {
            name: 'SQL',
            issuer: 'HackerRank',
            image: sql,
        },
        {
            name: 'JAVA',
            issuer: 'HackerRank',
            image: java,
        },
        {
            name: 'Build An E-Commerce Platform Using React',
            issuer: 'Scaler',
            image: scalerLogo,
        },
    ];
    

    return (
        <div className="resume">
            {/* Header Section */}
            <header className="resume-header">
                <div className="header-content">
                    <img src={profileImage} alt={`${name}'s Profile`} className="profile-image" />
                    <div className="header-text">
                        <h1>{name}</h1>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/hunaysubhash-chennu-b65560202" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
                                <FaLinkedin />
                                <span className="tooltip">LinkedIn</span>
                            </a>
                            <a href="https://github.com/Chennuhunaysubhash" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                                <FaGithub />
                                <span className="tooltip">GitHub</span>
                            </a>
                            <a href="https://leetcode.com/u/Hunaysubhash_Chennu/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LeetCode">
                                <FaCode />
                                <span className="tooltip">LeetCode</span>
                            </a>
                            <a href="https://chennuhunaysubhash.github.io/my-portfolio1/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Portfolio">
                                <FaGlobe />
                                <span className="tooltip">Portfolio</span>
                            </a>
                            <a href={`mailto:${email}`} className="icon-link" aria-label="Email">
                                <FaEnvelope />
                                <span className="tooltip">Email</span>
                            </a>
                            <a href="https://hub.docker.com/u/hunayhub97" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Docker Hub">
                                <FaDocker />
                                <span className="tooltip">Docker Hub</span>
                            </a>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Address">
                                <FaMapMarkerAlt />
                                <span className="tooltip">Address: {address}</span>
                            </a>
                            <a href="/hunaysubhash_chennu_JFS.pdf" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Resume">
                                <FaFileAlt />
                                <span className="tooltip">Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Profile Summary Section */}
            <section className="section profile-summary">
                <h2>Profile Summary</h2>
                <p>
                    Java Full Stack Developer with 2.8 years of experience in designing and developing robust applications using Java, Spring Boot, and Hibernate. Proficient in front-end technologies like React JS and multithreading. Adept at working within Agile frameworks, with expertise in the full Software Development Life Cycle (SDLC). Known for delivering high-quality solutions under tight deadlines, with a strong background in backend development and Microservices architecture.
                </p>
            </section>

            {/* Experience Section */}
            <section className="section">
                <h2>Experience</h2>
                <div className="job">
                    <h3>Java Full Stack Developer</h3>
                    <p>
                        <em>December 2021 - Present</em> | 
                        <span className="company-name">
                            Virtusa Consulting Services Pvt Ltd.
                            <img src="/src/images/virtusa_logo.jpeg" alt="Virtusa Logo" className="company-image" />
                        </span>, 
                        Hyderabad
                    </p>
                    <p><strong>Project:</strong> CITI Business Online — Client: Citi Bank</p>
                    <ul>
                        <li>Developed and maintained scalable full-stack applications using Java, Java 8, Spring Boot, and Microservices.</li>
                        <li>Collaborated with cross-functional teams to design and implement new features, enhancing operational efficiency and performance.</li>
                        <li>Developed and integrated RESTful APIs, ensuring secure and efficient data communication.</li>
                        <li>Implemented multithreading and managed data interactions using SQL databases.</li>
                        <li>Used ReactJS to create engaging and responsive user interfaces for internal tools.</li>
                        <li>Conducted unit testing and wrote JUnit test cases for various modules, improving code quality.</li>
                        <li>Ensured code compliance with SonarQube and followed security best practices.</li>
                        <li>Deployed code and monitored the operational stability of applications, providing bug fixes as necessary.</li>
                        <li>Participated in Agile ceremonies and worked closely with stakeholders to ensure timely deliveries.</li>
                    </ul>
                </div>
            </section>

            {/* Education Section */}
            <section className="section education-section">
                <h2>Education</h2>
                <div className="education">
                    <div className="education-card">
                        <h3>Bachelor of Technology in Computer Science & Engineering</h3>
                        <p><em>DNR College Of Engineering & Technology, Bhimavaram (2016-2020)</em></p>
                        <p>CGPA: 8.13</p>
                    </div>
                    <div className="education-card">
                        <h3>Intermediate</h3>
                        <p><em>Narayana Junior College, Bhimavaram (2014-2016)</em></p>
                        <p>Percentage: 86.60%</p>
                    </div>
                    <div className="education-card">
                        <h3>Secondary School Certificate (SSC)</h3>
                        <p><em>S.A.R Z.P. P High School, Dirusumarru (2014)</em></p>
                        <p>GPA: 7.8</p>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="section">
                <h2>Certifications</h2>
                <div className="certifications-container">
                    <ul className="certifications-list">
                        {certifications.map((certification, index) => (
                            <li
                                key={index}
                                onMouseEnter={() => setHoveredCertification(certification.name)}
                                onMouseLeave={() => setHoveredCertification(null)}
                            >
                                {certification.name} | Issued by: {certification.issuer}
                                {hoveredCertification === certification.name && (
                                    <img 
                                        src={certification.image} 
                                        alt={certification.issuer} 
                                        className="certification-image" 
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Technical Skills Section */}
            <section className="section profile-summary">
                <h2>Technical Skills</h2>
                <div className="skills-container">
                    <ul className="skills-list">
                        <li><strong>Languages:</strong> Java, JavaScript, TypeScript, SQL, NoSQL</li>
                        <li><strong>Frontend Technologies:</strong> React.js, HTML, CSS</li>
                        <li><strong>Backend Technologies:</strong> Spring Boot, Hibernate, Microservices, Multithreading</li>
                        <li><strong>Databases:</strong> MySQL, Oracle, PostgreSQL, MongoDB</li>
                        <li><strong>Tools:</strong> JUnit, Git, Docker, Kubernetes, Jira</li>
                        <li><strong>Methodologies:</strong> Agile, Scrum, SDLC</li>
                    </ul>
                </div>
            </section>
            <section className="section profile-summary">
                <h2>Project Highlights</h2>
                <div className="project profile-summary">
                    <h3>CITI Business Online</h3>
                    <p><strong>Role:</strong> Java Full Stack Developer</p>
                    <ul>
                        <li>Worked on developing key functionalities for financial transactions, enabling secure and efficient processes.</li>
                        <li>Utilized Spring Boot and Microservices to modularize the application for better scalability.</li>
                        <li>Collaborated with the database team to optimize SQL queries, ensuring faster data processing times.</li>
                    </ul>
                </div>
            </section>

            <section className="resume-footer">
                <p>I hereby declare that the information provided above is true to the best of my knowledge and belief.</p>
                <p className='left-display'>Hunay Subhash Chennu</p>
            </section>
        </div>
    );
};

export default Resume;
