import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Tech1 from "../../../assets/EventsImages/EventDetails/TechnicalImages/Ai&ds.jpg"
import Tech2 from "../../../assets/EventsImages/EventDetails/TechnicalImages/Ai.png"
import Tech3 from "../../../assets/EventsImages/EventDetails/TechnicalImages/Ai2.png"
import Tech4 from "../../../assets/EventsImages/EventDetails/TechnicalImages/Ai3.png"
import Tech5 from "../../../assets/EventsImages/EventDetails/TechnicalImages/buildthon.png"
import Tech6 from "../../../assets/EventsImages/EventDetails/TechnicalImages/codathon.png"
import Tech7 from "../../../assets/EventsImages/EventDetails/TechnicalImages/cse.png"
import Tech8 from "../../../assets/EventsImages/EventDetails/TechnicalImages/DESIGNATHON.png"
import Tech9 from "../../../assets/EventsImages/EventDetails/TechnicalImages/ELECTROBUZZ.png"
import Tech10 from "../../../assets/EventsImages/EventDetails/TechnicalImages/figma.png"
import Tech11 from "../../../assets/EventsImages/EventDetails/TechnicalImages/ft.png"
import Tech12 from "../../../assets/EventsImages/EventDetails/TechnicalImages/mct.png"
import Tech13 from "../../../assets/EventsImages/EventDetails/TechnicalImages/mech.png"
import Tech14 from "../../../assets/EventsImages/EventDetails/TechnicalImages/pitch.png"
import Tech15 from "../../../assets/EventsImages/EventDetails/TechnicalImages/tex.png"
import Tech16 from "../../../assets/EventsImages/EventDetails/TechnicalImages/eee.png"
import Tech17 from "../../../assets/EventsImages/EventDetails/TechnicalImages/vlsi.png"
import Tech18 from "../../../assets/EventsImages/EventDetails/TechnicalImages/Bt.png"


import NonTech1 from "../../../assets/EventsImages/EventDetails/Nontech/ComputerScienceandBusinessSystem.png"
import NonTech2 from "../../../assets/EventsImages/EventDetails/Nontech/ComputerScienceandEngineering.png"
import NonTech3 from "../../../assets/EventsImages/EventDetails/Nontech/ElectricalandElectronicsEngineering.png"
import NonTech4 from "../../../assets/EventsImages/EventDetails/Nontech/MechanicalEngineering.png"
import NonTech5 from "../../../assets/EventsImages/EventDetails/Nontech/TextileTechnology.png"
import NonTech6 from "../../../assets/EventsImages/EventDetails/Nontech/AIDS.png"


import Workshop1 from "../../../assets/EventsImages/EventDetails/Workshop/Department Of EEE - Industry IOT.png"
import Workshop2 from "../../../assets/EventsImages/EventDetails/Workshop/Department Of Mechatronics - Soaring High.png"
import Workshop3 from "../../../assets/EventsImages/EventDetails/Workshop/Department Of Textile - Medi Tex.png"
import Workshop4 from "../../../assets/EventsImages/EventDetails/Workshop/Frame 2.png"
import Workshop5 from "../../../assets/EventsImages/EventDetails/Workshop/DigitalMarketing.jpg"
import Workshop6 from "../../../assets/EventsImages/EventDetails/Workshop/CSE.png"

import Culturals1 from "../../../assets/photo1.jpg"
import Culturals2 from "../../../assets/photo2.jpg"
import Culturals3 from "../../../assets/photo3.jpg"
import Culturals4 from "../../../assets/photo4.jpg"

const EventDetails = () => {
    const { eventId } = useParams(); // Get the dynamic parameter from the URL

    const eventDetails = {
        // Technical Events
        "technical-event-1": {
            title: "Rewind & Crack",
            description:
                "Rewind & Crack is a reverse coding competition that challenges participants to analyze and reconstruct algorithms. This event tests problem-solving skills, logical thinking, and coding efficiency through three progressive rounds.",
            image: Tech7,
            rounds: [
                {
                    title: "Round 1",
                    description: [
                        "Duration: 30 Minutes",
                        "Participants will solve basic machine learning problems and submit their solutions.",
                    ],
                },
                {
                    title: "Round-2: Intermediate Challenges",
                    description: [
                        "Duration: 45 Minutes",
                        "Medium difficulty questions involving loops, conditions, and sorting logic. Some problems may include hidden test cases.",
                    ],
                },
                {
                    title: "Round-3: Advanced Reverse Coding",
                    description: [
                        "Duration: 60 Minutes",
                        "Complex problems requiring data structure manipulations, encryption, or algorithm reconstruction.",
                    ],
                },
            ],
            rules: [
                "The jury's decision is final.",
                "Any form of malpractice will lead to disqualification.",
                "Team: 2-3 Members",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 20, 2025",
                    time: "10:00 AM to 12:00 PM",
                    location: "IT Park, Silicon Valley",
                },
                {
                    round: "Round 2",
                    date: "May 21, 2025",
                    time: "2:00 PM to 4:00 PM",
                    location: "IT Park, Silicon Valley",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mrs M.Varshana Devi",
                        phone: "9597604228",
                        email: "varshanadevi@ksrct.ac.in",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Kaviya S",
                        phone: "6382491543",
                        email: "kaviyasenthil12005@gmail.com",
                    },
                ],
            },
            registrationLink: "https://example.com/register/ai-ml-workshop", // Registration link
        },

        "technical-event-2": {
            title: "VoltEdge",
            description:
                "This event offers a unique opportunity for participants to showcase their innovative solutions and problem-solving skills.",
            image: Tech16,
            rounds: [
                {
                    title: "Round 1: Qualifier (Basic Problems)",
                    description: "Duration: 30 Minutes ",
                },
                {
                    title: "Round 2",
                    description:
                        "Participants will build a dynamic web application using React.",
                },
            ],
            rules: [
                "Team must contain maximum 3",
                "Electrical / electronic prototype is not mandatory; however, if available, it can be presented.",
                "A poster on A3 and above size is mandatory.",
                "The presentation duration is 4 minutes. If a demo video is available, it should be included in the presentation. An additional 1 minute will be allocated for queries.",
                "Each team must contain maximum 3.",
                "Charge per Person/Team: 300 INR (Per Team)",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Rajasekaran N. AP / EEE",
                        phone: "8056975723",
                        email: "rajasekaran.n@ksrct.ac.in",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Bhuwanesh R",
                        phone: "9342566322",
                        email: "bhuwanesh2004@gmail.com",
                    },
                ],
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        "technical-event-3": {
            title: "SEMISPARK(PROJECT PRESENTATION) ",
            description:
                "Project Presentation in the fields of IoT (Internet of Things),AI (Artificial Intelligence),Embedded Systems,E-Vehicle and Autonomous Vehicle, VLSI (Very Large Scale Integration), 3D Printing",
            image: Tech17,
            rounds: [
                {
                    title: "Round 1: Qualifier (Basic Problems)",
                    description: "Each team will have 10 minutes to present their project",
                },
            ],
            rules: [
                "Each team consist of 2 to 4 members",
                "Each team will have 10 minutes to present their project.",
                "An additional 5 minutes will be allocated for Q&A.",
                "All projects be based on engineering, technology, or innovation",
                "Any form of plagiarism or copied work will result in immediate disqualification",
                "The attendance is mandatory for all session to getting certificate",
                "Winner Prize Amount is Rs. 1000 will be awarded to the winning team",
                "Presentation Structure:",
                "1.	Title Slide: Include the project title, team name, team members' names, institution/company and date.",
                "2.	Title Slide: Include the project title, team name, team members' names, institution/company and date.",
                "3. Methodology: Describe the approach, tools and techniques used.",
                "4.	Results & Findings: Present key data, graphs and observations.",
                "5. Conclusion & Future Work: Summarize key takeaways and propose future improvements.",
                "6.	References: List sources and citations used in the project.",
                "7.	Q&A Slide: Be prepared for audience questions."
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mrs. C. Saranya ",
                        phone: "Mrs. C. Saranya ",
                    },
                    {
                        name: "Mr. D. Poornakumar",
                        phone: "9003645614",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Moulishwaran V",
                        phone: "8940451977",
                    },
                    {
                        name: "Jaishree A",
                        phone: "9994371445",
                    },
                ],
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },

        "technical-event-4": {
            title: "Biotech Shark Tank – Pitch Your Idea",
            description:
                "A biotech startup pitching event where participants present innovative ideas in life sciences.",
            image: Tech18,
            rounds: [
                {
                    title: "Round 1 – Abstract Submission",
                    description: "Teams submit a one-page abstract of their Bio-/Life science-related startup idea.",
                },
                {
                    title: "Final Round – Shark Tank Style Pitch:",
                    description: "Teams deliver a 5-minute detailed pitch explaining their startup idea, revenue model, and growth strategy. Followed by a 7-minute Q&A session with the jury (Sharks).",

                },
            ],
            rules: [
                "2-3 members per team",
                "Teams must submit original ideas (plagiarism will lead to disqualification).",
                "Use of presentation slides, prototypes, and models is allowed.",
                "No offensive, unethical, or misleading information in presentations",
                "Time limits must be strictly followed in each round",
                "Any violation of rules may lead to disqualification",
                "Rewards: Participants will receive a certificate of participation. The best team will be awarded prizes along with a Certificate of Achievement.",
                "Charge per Person/Team: Charge per person is 100 INR",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Dr. Rengesh Balakrishnan",
                        email: "rengeshbalakrishnan@ksrct.ac.in",
                        phone: "9841997754",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Sankar R",
                        email: "sankarragu832@gmail.com",
                        phone: "7397534931",
                    },
                    {
                        name: "Mridula Dev D",
                        email: "mriduladev2004@gmail.com",
                        phone: "8754184017",
                    },
                ],
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        "technical-event-5": {
            title: "ROBO SOCCER",
            description:
                "Participants must design a manually controlled robot without using pre-made kits or commercial robots. Each bot must be exclusive to one team and fit within 30 cm x 30 cm x 30 cm (including wheels) with a maximum weight of 7 kg. Control can be wired or wireless, but only one person may operate the bot. Teams must bring their own power supply for wired bots, and all bots must be electrically powered (no IC engines) with a voltage limit of 24V DC. For safety, a manual emergency disconnect switch is mandatory",
            image: Tech12,
            rounds: [
                {
                    title: "Round 1 ",
                    description: "Participants must design a manually controlled robot without using pre-made kits or commercial robots.",
                },
            ],
            rules: [
                "Team (maximum 4 members per team)",
                "Arena size – 10 x 8 feet",
                "Each match is given a time of 2-4 minutes based on number of teams registered.",
                "Each match has two halves",
                "Change of battery will not be allowed during the match",
                "The team with higher goals is considered winner of that match",
                "Intentional ramming of opponent bot is considered penalty.",
                "If each team scored equal points at the end of the match a 1 minute will be add on to the game.",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mrs. V. Indhumathi",
                        email: "indhumathi@ksrct.ac.in",
                        phone: "9965137001",
                    },
                    {
                        name: "Dr. M. Sasikumar",
                        email: "sasikumarm@ksrct.ac.in",
                        phone: "9965167895",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Gokkarneashvarnath V",
                        email: "gokkarmct@gmail.com",
                        phone: "9444177711",
                    },
                ],
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        "technical-event-6": {
            title: "Figma Fusion: The UI/UX Design Showdown",
            description:
                "Participants will design a user interface (UI) and user experience (UX) for a provided project use case using Figma. 	Figma Account: Ensure you have an active Figma account before the event begins. If you don’t have one, sign up for free at figma.com.",
            image: Tech10,
            rounds: [
                {
                    title: "Round 1: Research & Ideation",
                    description: "Participants must thoroughly research the given use case, define user personas, and outline the design requirements.",
                },
                {
                    title: "Round 2: UI/UX Design Creation",
                    description: "High-fidelity UI designs must be created, incorporating user-friendly navigation, accessibility, and consistency. •	Prototypes are required for Round 2; ensure you link your screens to showcase how users interact with your design.",
                },
            ],
            rules: [
                "Participants must submit a Figma file with their design at the end of each round.",
                "Ensure that all files are well-organized and clearly named.",
                "All designs must be original. Any form of plagiarism or copying of existing designs will lead to disqualification.",
                "Participants may use assets (icons, images, fonts) from free online resources, but they must be properly attributed if necessary.",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mrs. V. Indhumathi",
                        email: "indhumathi@ksrct.ac.in",
                        phone: "9965137001",
                    },
                    {
                        name: "Dr. M. Sasikumar",
                        email: "sasikumarm@ksrct.ac.in",
                        phone: "9965167895",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Gokkarneashvarnath V",
                        email: "gokkarmct@gmail.com",
                        phone: "9444177711",
                    },
                ],
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        "technical-event-7": {
            title: "ElectroBuzz",
            description:
                "The event consists of two stages where teams will compete to demonstrate their proficiency in handling electronic components and solving real-world circuit issues. In the first stage, participants will race against time to sort and organize electronic components, while in the second stage, they will diagnose and fix faults in a given circuit. The event encourages teamwork, quick thinking, and technical expertise, with winners being selected based on performance in each stage. The top three teams will be awarded prizes.",
            image: Tech9,
            rounds: [
                {
                    title: "Round 1:",
                    description: [
                        "Participants will be given a set electronic components, arrange the given electronic components in increasing order within the specified time.",
                        "Duration: 1 hour",
                    ],
                },
                {
                    title: "Round 2: Circuit Debugging",
                    description: [
                        "Participants will be given a electronic circuit , they want to identify and fix faults in the given circuit within the given time.",
                        "Duration: 1.5 hours", 
                    ]
                },
            ],
            rules: [
                "Participants can compete individually or in teams of 2-4 members.",
                "Yes, inter-college team members are allowed",
                "Yes, inter-specialization team members are allowed.",
                "No external tools allowed.",
                "Complete tasks within the given time limit.",
                "Damaging equipment will lead to disqualification."
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mrs.K.Gokiladevi (AP/ECE)",
                        phone: "9715205353",
                        email: "gogiladevi@ksrct.ac.in"
                    }
                ],
                studentCoordinator: [
                    {
                        name: "Sanjay Kumar R (III-Year/ECE)",
                        phone: "7397031629",
                        email: "sanjaykumar.ramasamy22@gmail.com"
                    },
                    {
                        name: "Kowshika K (II-Year/CSE(AIML))",
                        phone: "9342806195",
                        email: "kowshika1912@gmail.com"
                    },
                ],
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        "technical-event-8": {
            title: "Urban Nourish: Street Food Remix",
            description:
                "Revolutionizing Street Food: A Fusion of Nutrition & Flavor This event aims to reinvent street food by integrating health-conscious innovations while maintaining cultural authenticity and taste. The goal is to develop a unique product that enhances nutrition without compromising on flavor.",
            image: Tech11,
            rounds: [
                {
                    title: "Round 1",
                    description: "The event aligns with the following SDGs:",
                },
                {
                    description: "SDG 2: Zero Hunger – Developing nutrient-rich street foods to improve food security, •	SDG 3: Good Health and Well-being – Encouraging healthier eating habits through innovative food formulations,•	SDG 9: Industry, Innovation, and Infrastructure – Promoting creativity and technological advancements in food processing,  ",
                },
            ],
            rules: [
                "Eligibility: Open to all students from food science, technology, and related disciplines. Teams can have a maximum of 2 members.",
                "Product Criteria: The product must be an innovative infusion of nutrition and flavor in street food. It should not be an exact replica of an existing market product.",
                "Poster Guidelines: Size: A2 (420 × 594 mm) , Must include product name, concept, ingredients, nutritional benefits, and uniqueness, Clear visuals, infographics, and creativity are encouraged",
                "Product Display: Each team must bring and showcase their product for evaluation.",
                "Presentation: Time Limit:5 minutes per team ,Must cover product innovation, nutritional benefits, and SDG alignment, Judges may ask questions after the presentation ",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mr G Bharath, AP/FT",
                        phone: "9047976171",
                    }
                ],
                studentCoordinator: [
                    {
                        name: "Surya S, III Year/FT ",
                        phone: "9360492992",
                    },
                    {
                        name: "Rajulapati Yatheeswar N A, II Year/FT ",
                        phone: "9441236991",
                    },
                    {
                        name: "Vijaya Yugeshwar R II Year/FT ",
                        phone: "9585768184",
                    },
                ],
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        "technical-event-9": {
            title: "Paper Presentation",

            description:
                "Explore topics like Aerodynamics in Automobiles and Additive Manufacturing in Aerospace Engineering.",
            image: Tech13,
            rounds: [
                {
                    title: "Paper Presentation",
                    description: "Paper Presenting",
                }
            ],
            rules: [
                "Presentations should be in PPT format.",
                "Papers must be original and unpublished.",
                "Participants must follow college instructions."
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Dr. P.S. Sampath",
                        email: "sampathps@ksrct.ac.in",
                        phone: "9962116570"
                    }
                ],
                studentCoordinator: [
                    {
                        name: "Avinesh G",
                        email: "avineshavinesh65@gmail.com",
                        phone: "9361002776"
                    }
                ]
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        "technical-event-10": {
            title: "Designathon",
            description: "A creative design competition where participants transform sketches into 3D models, culminating in real-life product modeling.",
            image: Tech8,
            rounds: [
                { "title": "Round 1", "description": "Participants will work on 2D sketching." },
                { "title": "Round 2", "description": "Participants will be given a 2D sketch to convert into a 3D model." },
                { "title": "Round 3", "description": "Participants will receive a real-life product and model it on their own." }
            ],
            rules: [
                "Students can bring their own laptops; computers are also available.",
                "Participants should use only SolidWorks, Fusion 360, or NX CAD software.",
                "Participants must follow the college’s instructions."
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        "name": "Mr. C. Ramesh",
                        "email": "rameshc@ksrct.ac.in",
                        "phone": "9629767778"
                    },
                    {
                        "name": "Mr. M. Prasath",
                        "email": "prasathm@ksrct.ac.in",
                        "phone": "9788206877"
                    }
                ],
                studentCoordinator: [
                    {
                        "name": "K P Arunachalam",
                        "email": "arunachalam122004@gmail.com",
                        "phone": "9025972365"
                    }
                ]
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        "technical-event-11": {
            title: "WebGenesis (Interactive Web Page Development)",
            description: "WebGenesis challenges teams of two to showcase their creativity and technical skills by building an interactive web page from scratch. Participants can use HTML, CSS, JavaScript, or frameworks like React, ensuring originality and adherence to UI/UX principles. Pre-made templates are not allowed, and all code must be written from the ground up. The competition will be judged based on functionality, responsiveness, and creativity, emphasizing seamless performance, adaptability across devices, and innovative design. This is your chance to bring ideas to life, craft engaging web experiences, and stand out as a web development innovator.",
            image: Tech11,
            rounds: [
               
            ],
            rules: [
                "WebGenesis (Interactive Web Page Creation)",
                "Team consists of 2 members",
                "Teams can use HTML, CSS, JavaScript, or frameworks like React.",
                "The webpage must be original and follow UI/UX principles.",
                "No pre-made templates; teams must code from scratch.",
                "Judging is based on functionality, responsiveness, and creativity.",

            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        "name": "1.	Mr.P.Dinesh Kumar ",
                        "email": "p.dineshkumar@ksrct.ac.in",
                        "phone": "9688837873"
                    },
                ],
                studentCoordinator: [
                    {
                        "name": "Akchayaa V P ",
                        "email": "akchayaa1105@gmail.com",
                        "phone": "9345865649"
                    },
                    {
                        "name": "Sandhiya M",
                        "email": "sandhiyamanikandan17@gmail.com",
                        "phone": "9344806015"
                    }
                ]
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        "technical-event-12": {
            title: "Rapid Coding",
            description: "'Rapid Coding' is a technical event where participants compete individually to solve coding challenges within a time limit. Multiple submissions are allowed, but only the last one counts for scoring. Ensure originality, as plagiarism leads to disqualification! 🚀💻",
            image: Tech3,
            rounds: [
               
            ],
            rules: [
                "The event is open to all individual participants.",
                "Each problem must be solved within the time limits imposed for each round.",
                "Participants can submit their code multiple times, but only the last submission will be considered for scoring.",
                "The time limit for each problem will be visible throughout the competition. ",
                "All code must be original. Any attempt to copy code from other participants or external sources will lead to disqualification.",

            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        "name": "Mrs .S.Sripriya ",
                        "phone": "9962435353"
                    },
                ],
                studentCoordinator: [
                    {
                        "name": "Kavin R ",
                        "phone": "7904148796 "
                    },
                    {
                        "name": "Saran G",
                        "phone": "8940108788"
                    }
                ]
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        "technical-event-13": {
            title: "Cook with Prompt",
            description: "' Cook with Prompt' is a technical event where participants craft precise AI image generation prompts based on given themes. Compete individually to create the most effective prompts within a fixed time. Showcase your creativity and AI skills in this unique challenge! 🚀🎨",
            image: Tech2,
            rounds: [
               
            ],
            rules: [
                "The event is open to all individual participants.",
                "The event will feature prompt creation tasks based on AI image generation. Participants will receive a set of themes or concepts that they need to transform into a clear and effective prompt.",
                "The event will have a fixed duration   in which participants will have to complete their tasks.",

            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        "name": "Mrs.S.Gayathri ",
                        "phone": "9486657591"
                    },
                ],
                studentCoordinator: [
                    {
                        "name": "Vasanth S",
                        "phone": "9159069646 "
                    },
                    {
                        "name": "Harish M",
                        "phone": "6369303123"
                    }
                ]
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        "technical-event-14": {
            title: "Codathon",
            description: "Codathon is a competitive coding event where participants solve programming problems within a time limit. Hosted on the Unstop platform, this event challenges individuals or teams to showcase their coding skills, creativity, and problem-solving abilities. Participants will be judged on the correctness, innovation, and quality of their code.",
            image: Tech1,
            rounds: [
               
            ],
            rules: [
                "Open to all students with a passion for coding.",
                "No restrictions on domain or specialization.",
                "Participants can compete individually or in teams of 2-4 members.",
                "Yes, inter-college team members are allowed.",
                "Yes, inter-specialization team members are allowed",
                "No pre-written code or external help is allowed.",
                "Participants must adhere to the time limit.",
                "Any form of plagiarism will lead to disqualification."

            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        "name": "Ms. R.P. Harshini (AP/CSE(AIML))",
                        email:"harshinirp@ksrct.ac.in",
                        "phone": "9361446506"
                    },
                ],
                studentCoordinator: [
                    {
                        "name": "Praveen S (II-Year/CSE(AIML))",
                        "email":"saravananpraveen1157@gmail.com",
                        "phone": "6369493352 "
                    },
                    {
                        "name": "Pavithran G (II-Year/CSE(AIML))",
                        "email":"techpavithran18@gmail.com",
                        "phone": "9363575964"
                    }
                ]
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },
        // Non-Technical Events
        "non-technical-event-1": {
            title: "trailblazers: The Clue Hunt",
            description:
                "Trailblazers is an interactive clue hunt event designed to test participants' problem-solving and teamwork skills. Teams will solve riddles, puzzles, and locate QR codes to progress through the challenge.",
            image: NonTech2,
            rounds: [
                {
                    title: "Round 1",
                    description:
                        "Participants will present their artwork to the judges.",
                },
                {
                    title: "Round 2",
                    description:
                        "Finalists will create a new piece of art on the spot.",
                },
            ],
            rules: [
                "Teams must stay together during the hunt.",
                "No use of external help or mobile devices for assistance.",
                "Participants must bring their own materials.",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 24, 2025",
                    time: "10:00 AM to 12:00 PM",
                    location: "Art Gallery, Creative Center",
                },
                {
                    round: "Round 2",
                    date: "May 25, 2025",
                    time: "2:00 PM to 4:00 PM",
                    location: "Art Gallery, Creative Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mrs B.Janani",
                        phone: "9345215112",
                        email: "janani@ksrct.ac.in",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Aswin K",
                        phone: "6382491543",
                        email: "aswinkannan0606@gmail.com",
                    },
                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        "non-technical-event-2": {
            title: "Tech-Link Challenge",
            description:
                "Tech-Link Challenge encourages creative thinking and teamwork to tackle complex challenges in a fun and engaging way.",
            image: NonTech3,
            rounds: [
                {
                    title: "Round 1",
                    description:
                        "Participants will present their artwork to the judges.",
                },
                {
                    title: "Round 2",
                    description:
                        "Finalists will create a new piece of art on the spot.",
                },
            ],
            rules: [
                "Each team must consist maximum 2 members. ",
                "The competition will have two rounds:",
                "The first round will be conducted online. ",
                "Shortlisted students from the first round will proceed to the second round.",
                "Charge per Person/Team: 100 INR (Per Person)",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 24, 2025",
                    time: "10:00 AM to 12:00 PM",
                    location: "Art Gallery, Creative Center",
                },
                {
                    round: "Round 2",
                    date: "May 25, 2025",
                    time: "2:00 PM to 4:00 PM",
                    location: "Art Gallery, Creative Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Dhanapal M",
                        phone: "8012181649",
                        email: "dhanpalm@ksrct.ac.in",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Karmuhilan V ",
                        phone: "9025244374",
                        email: "karmuhilan90252@gmail.com ",
                    },
                    {
                        name: "Harshvarthan A",
                        phone: "8667561751",
                        email: "alwinharsh2006@gmail.com",
                    },
                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        "non-technical-event-3": {
            title: "CONNEXION",
            description:
                "We are delighted to present CONNEXION, a fun and engaging non-tech game that challenges your imagination, observation, and quick thinking. The game consists of three thrilling rounds, where the players connect the clues in the given images to reach the correct conclusion.",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounds: [
                {
                    title: "Round 1 – Guess Similar Words:",
                    description:
                        "Participants will present their artwork to the judges.",
                },
                {
                    title: "Round 2 – Guess the Movie Name: ",
                    description:
                        "Finalists will create a new piece of art on the spot.",
                },
                {
                    title: "Round 3 – Guess the Song:",
                    description:
                        "Round 3 – Guess the Song:",
                },
            ],
            rules: [
                "Maximum Two per team.",
                "The team will be given with three images with 30 seconds of time ",
                "The team has to identify the correct answer by connecting the pictures within the given time.",
                "Based on their performance they will lead to the next Rounds.",
                "In case of tie, they have to Compete another Round as Rapid-Fire Round",
                "The attendance is mandatory for all section to getting certificate.",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 24, 2025",
                    time: "10:00 AM to 12:00 PM",
                    location: "Art Gallery, Creative Center",
                },
                {
                    round: "Round 2",
                    date: "May 25, 2025",
                    time: "2:00 PM to 4:00 PM",
                    location: "Art Gallery, Creative Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Dr. N.Lalithamani ",
                        phone: "8925568867",
                    },
                    {
                        name: "Dr. P.Sundhathirakumar ",
                        phone: "9500825738",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Sathiya Jeeva M ",
                        phone: "6380343664",
                    },
                    {
                        name: "Deepasri M ",
                        phone: "7695945259",
                    },
                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        "non-technical-event-4": {
            title: "Dumb Charades - Act It Out!",
            description:
                "A fun and engaging event where participants act out biotech-related words or phrases without speaking",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounds: [
                {
                    title: "Round 1 – Qualifiers:",
                    description:
                        "Each team gets 60 seconds per turn to act out and guess a word/phrase. Teams must guess at least 3 words to qualify for the next round",
                },
                {
                    title: "Round 2 – Semi-Finals: ",
                    description:
                        "Difficulty level increases with phrases, movie titles, or scientific terms. Teams get 45 seconds per turn. Top teams proceed to the final round.",
                },
                {
                    title: "Final Round:",
                    description:
                        "Teams must guess as many words/phrases as possible within 1 minutes. The team with the highest correct guesses wins",
                },
            ],
            rules: [
                "2 members per team",
                "No speaking, lip movement, or writing is allowed while acting",
                "Teams can pass a word but will lose points",
                "Use of gestures, facial expressions, and body language is encouraged",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 24, 2025",
                    time: "10:00 AM to 12:00 PM",
                    location: "Art Gallery, Creative Center",
                },
                {
                    round: "Round 2",
                    date: "May 25, 2025",
                    time: "2:00 PM to 4:00 PM",
                    location: "Art Gallery, Creative Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mr. R. Arulvel",
                        email: "arulvelr@ksrct.ac.in",
                        phone: "8870921600",
                    },

                ],
                studentCoordinator: [
                    {
                        name: "Pradeep Kumar A",
                        email: "pradeeplatha16@gmail.com",
                        phone: "8825656199",
                    },
                    {
                        name: "Manoj R",
                        email: "ravimano672@gmail.com",
                        phone: "9345286006",
                    },
                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        "non-technical-event-5": {
            title: "Its Talk Time",
            description:
                "Two teams face off, taking turns to continue a given sentence within 5 seconds. Each team starts with 3 lives and failing to respond in time or providing an illogical continuation results in losing a life. The game continues until one team loses all three lives and gets eliminated. With pressure mounting and stories taking unexpected turns, teams must stay sharp and work together to keep the narrative flowing. The last team standing wins, proving their mastery of words and quick wit!",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounds: [
                {
                    title: "Round 1",
                    description:
                        "The last team standing wins, proving their mastery of words and quick wit!",
                },
            ],
            rules: [
                "Teams & Lives: Each team (3 or fewer members) starts with 3 lives per round.",
                "Turn Time: Teams must continue the given sentence within 5 seconds or lose a life.",
                "Elimination: The first team to lose all 3 lives is eliminated",
                "Match Duration: If the round reaches 10 minutes, the team with more lives moves forward. If both teams have the same lives, the round restarts, but each team gets only 1 life.",
                "Language: Sentences must be in English or Tamil only.",
                "Originality: No repeating sentences, every response must be unique and meaningful.",
                "Final Round: Rules for the final round will be revealed on the spot"
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 24, 2025",
                    time: "10:00 AM to 12:00 PM",
                    location: "Art Gallery, Creative Center",
                },
                {
                    round: "Round 2",
                    date: "May 25, 2025",
                    time: "2:00 PM to 4:00 PM",
                    location: "Art Gallery, Creative Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Dr. C. Vijayakumar",
                        email: "vijayakumarc@ksrct.ac.in",
                        phone: "6379112939",
                    },
                    {
                        name: "Dr. R Senthilmurugan",
                        email: "senthilmurugan@ksrct.ac.in",
                        phone: "9843488996",
                    },

                ],
                studentCoordinator: [
                    {
                        name: "Akash Raam S",
                        email: "akashadthi.sd@gmail.com",
                        phone: "6381279741",
                    },

                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        "non-technical-event-6": {
            title: "SyncX",
            description:
                "Two teams face off, taking turns to continue a given sentence within 5 seconds. Each team starts with 3 lives and failing to respond in time or providing an illogical continuation results in losing a life. The game continues until one team loses all three lives and gets eliminated. With pressure mounting and stories taking unexpected turns, teams must stay sharp and work together to keep the narrative flowing. The last team standing wins, proving their mastery of words and quick wit!",
            image: NonTech1,
            rounds: [
                {
                    title: "Round 1",
                    description:
                        "Guess the Song",
                },
                {
                    title: "Round 2",
                    description:
                        "Guess the Celebrity",
                },
                {
                    title: "Round 3",
                    description:
                        "Guess the Brand",
                },
            ],
            rules: [
                "A team is asked to pick a chit of team names in a bowl and compete with chosen team",
                "To the teams a list of 4 – 5 images will be displayed.",
                "The teams must connect the word to find the answer which is related to songs",
                "To every set 30 seconds time frame will be displayed to the teams.",
                "From each round only 1 team will be chosen as winner. In case of tie, the teams will be made to play another round and then winner will be decided.",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 24, 2025",
                    time: "10:00 AM to 12:00 PM",
                    location: "Art Gallery, Creative Center",
                },
                {
                    round: "Round 2",
                    date: "May 25, 2025",
                    time: "2:00 PM to 4:00 PM",
                    location: "Art Gallery, Creative Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Dr. C. Vijayakumar",
                        email: "vijayakumarc@ksrct.ac.in",
                        phone: "6379112939",
                    },
                    {
                        name: "Dr. R Senthilmurugan",
                        email: "senthilmurugan@ksrct.ac.in",
                        phone: "9843488996",
                    },

                ],
                studentCoordinator: [
                    {
                        name: "Akash Raam S",
                        email: "akashadthi.sd@gmail.com",
                        phone: "6381279741",
                    },

                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        "non-technical-event-7": {
            title: "A Guess Change",
            description:
                "Unmasking Brands & Flavors: A Journey Through Corporate Identities & Culinary Secrets This event is designed to challenge participantsknowledge of corporate branding and food recognition through an interactive three-level game. It tests awareness, teamwork, and quick thinking in a fun and engaging way.",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounds: [
                {
                    title: "Level 1: Logo Guessing Challenge",
                    description: [
                        "Teams will be shown blurred or partial logos of food brands and must identify them.",
                        "Each correct answer earns points; the top teams progress to the next level.",
                    ]
                },
                {
                    title: "Level 2: Food Dumb Charades",
                    description: [
                        "One team member will be given a food-related word/brand and must enact it without speaking.",
                        "The other members must guess the word within a given time.",
                        "Teams with the highest scores move to the final level",
                    ]
                },
                {
                    title: "Level 3: Guess the Ingredient",
                    description: [
                        "Teams will be presented with a mystery dish or product and must identify key ingredients.",
                        "Limited time will be given for each guess.",
                        "The team with the most correct ingredient identifications wins.",
                    ]
                }
            ],
            rules: [
                "Use of mobile phones or external help is strictly prohibited.",
                "Teams must answer within the time limit for each round.",
                "Judges' decisions are final and binding"
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 24, 2025",
                    time: "10:00 AM to 12:00 PM",
                    location: "Art Gallery, Creative Center",
                },
                {
                    round: "Round 2",
                    date: "May 25, 2025",
                    time: "2:00 PM to 4:00 PM",
                    location: "Art Gallery, Creative Center",
                },
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mrs. K. Kavitha , AP/Maths",
                        email: "vijayakumarc@ksrct.ac.in",
                        phone: "9600933007",
                    },

                ],
                studentCoordinator: [
                    {
                        name: "Lega C, III Year/FT ",
                        phone: "9360115935",
                    },
                    {
                        name: "Pavithra R, II Year/FT",
                        phone: "9345894830",
                    },
                    {
                        name: "Hariprasath K, II Year/FT",
                        phone: "9080753031",
                    },

                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        "non-technical-event-8": {
            title: "one Click",
            description:
                "Capture the beauty of our campus and showcase your photography skills in this exciting contest! Post your photo on social media with #ksrct1994 to gain bonus points based on likes. Participants receive certificates, and winners get a cash prize! 📸✨",
            image: NonTech4,
            rounds: [
            ],
            rules: [
                "The photographs should be taken only within the campus.",
                "The photographs can be taken with any camera, i.e. DSLR, Mobile camera.",
                "Photo enhancements is allowed, but not allowed to manipulate the content.",
                "Photographs should be minimum 1MB in size.",
                "The originality of the photos will be checked.",
                "The participants have to post the photo in their social media handle using the hashtag #ksrct1994. Additional of five points will be awarded for the likes they got for the photo.",
                "For Individual 50 rupees"
            ],
            schedule: [
               
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mr.S.Karthik",
                        email: "skarthik@ksrct.ac.in",
                        phone: "9790667321",
                    },

                ],
                studentCoordinator: [
                    {
                        name: "Harshad Gajanan Shivpuje ",
                        phone: "7708927651",
                    }

                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        "non-technical-event-9": {
            title: "404:Meme Overload (Meme creation based on IT scenarios)",
            description:
                "IT Meme Battle is a fun and creative competition where teams of one or two members create original IT-related memes. Participants can use image + text, GIFs, or even hand-drawn memes for extra creativity. Plagiarized content will lead to disqualification, and all memes must be appropriate and respectful. Submissions must be made within the given time limit. Let your humor and tech knowledge shine in this battle of wit and creativity.",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounds: [
            ],
            rules: [
                "Team Size: Each team can have 1 or 2 members.",
                "Originality Matters – Memes should be original and creative. Plagiarized content will lead to disqualification.",
                "Appropriate Content – No offensive and inappropriate memes. Keep it fun and respectful.",
                "Format Flexibility – Participants can create memes using:  Image + Text (classic meme style) ,  GIFs  ,Hand-drawn memes (for extra creativity!)",
                "Submission Time – Memes must be submitted within the given time limit.",
            ],
            schedule: [
               
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mr.P.Dinesh Kumar",
                        email: "p.dineshkumar@ksrct.ac.in",
                        phone: "9688837873",
                    },

                ],
                studentCoordinator: [
                    {
                        name: "Lakma Varshini R ",
                        email:"lakmavarshini4@gmail.com",
                        phone: "6381118259",

                    },
                    {
                        name: "Vignesh K ",
                        email:"vigneshblue3162@gmail.com",
                        phone: "6381083683",

                    }

                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        "non-technical-event-10": {
            title: "Short Film Contest",
            description:
                "'Short Film Contest' is a non-technical event where individuals or teams (2-5 members) create original short films on themes like environmental awareness, food adulteration, sci-fi, and sustainability. Films must be 3-10 minutes long and submitted in MP4, MOV, or AVI format. Winners will be judged on creativity, storytelling, and impact! 🎬✨",
            image: NonTech6,
            rounds: [
            ],
            rules: [
                "The event is open to all individual participants and teams. Teams may consist of 2 to 5 members.",
                "The Short films can be based on environmental awareness, food adulteration, science fiction,sustainable development goals.",
                "The short film should be original ",
                "Duration should be between 3 to 10 minutes.",
                "All films must be submitted in video file format (MP4, MOV, or AVI).",
                "•	Winners will be judged based on creativity, storytelling, and overall impact."
            ],
            schedule: [
               
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mr.S.Raja ",
                        phone: "75028281440",
                    },

                ],
                studentCoordinator: [
                    {
                        name: "Karthikeyan S A",
                        phone: "7358996885",

                    },
                    {
                        name: "Tamilselvan C",
                        phone: "6374148544",

                    },
                    {
                        name: "Dhayaneshwaran S S ",
                        phone: "8220698518",

                    }

                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        "non-technical-event-11": {
            title: "Bike & Car Modification Showcase",
            description:
                "This event is a platform for automobile enthusiasts to showcase their customized bikes and cars. Participants will display their creative designs, performance upgrades, and cutting-edge modifications. The event aims to celebrate engineering and artistic skills in vehicle customization.•Free of charge (No registration fee).•	Awards for top performers. •	Certificates for all participants. ",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounds: [
            ],
            rules: [
                "Open to all students and automobile enthusiasts.",
                "Individual participation.",
                "Yes,inter-college participants are allowed.",
                "Yes, inter-specialization participants are allowed.",
                "Only legally compliant modified bikes and cars are allowed.",
                "Vehicles must be in safe, working condition.",
                "No reckless behavior (e.g., burnouts, excessive revving)."
            ],
            schedule: [
               
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mr. S. Insol Rajasekar (AP/CSE(AIML))",
                        email:": insolrajasekar@ksrct.ac.in",
                        phone: "8220512436",
                    },

                ],
                studentCoordinator: [
                    {
                        name: "Jaya Krishana S (III-Year/CSE(AIML))",
                        email:"jayakrishna0023@gmail.com",
                        phone: "6380994224",

                    },
                    {
                        name: "Ruban B (III-Year/CSE(AIML))",
                        email:"rubanmusthafa253@gmail.com",
                        phone: "8144596872",

                    },
                    {
                        name: "Dhayaneshwaran S S ",
                        phone: "8220698518",

                    }

                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        "non-technical-event-12": {
            title: "Mind Maze",
            description:
                "Mind Maze is an exciting non-technical event that challenges participants to decode hidden clues from images using logic, pattern recognition, and creative thinking. Participants will engage their problem-solving skills to uncover the mystery, aiming to be the first to solve the clue within the time limit.",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounds: [
                {
                    title: "Single Round",
                    description: [
                        "Participants will decode a hidden clue within an image.",
                        "Speed, accuracy, and logical reasoning used to decipher the clue.",
                    ]
                },
            ],
            rules: [
                "Participants must complete the task within the 15-minute time limit",
                "Only the first participant to solve the clue will be declared the winner.",
                "No external help or resources can be used during the event."
            ],
            schedule: [
               
            ],
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mrs M Devaki (AP/ECE))",
                        email:"devaki@ksrct.ac.in",
                        phone: "9095059424",
                    },

                ],
                studentCoordinator: [
                    {
                        name: "Dharaniboopathi M (III-Year/ECE)",
                        email:"dharani1865@gmail.com",
                        phone: "9790115706",

                    },
                    {
                        name: "Prathipa T (II-Year/ECE)",
                        email:"thangavelprathiba@gmail.com",
                        phone: "9342626157",

                    },
                ],
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },
        // Culturals
        "culturals-event-1": {
            title: "Mastro Mania",
            description:
                "Musicians performing with musical instruments.",
            image: Culturals1,
            contact: {
                facultyCoordinator: [
                    {
                        name: "Michael Brown",
                        phone: "7654321098",
                        email: "michael.b@xyzmail.com",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Sarah Lee",
                        phone: "6543210987",
                        email: "sarah.lee@xyzmail.com",
                    },
                ],
            },
            registrationLink: "https://example.com/register/dance-performance", // Registration link
        },
        "culturals-event-2": {
            title: "Musical Mavericks",
            description:
                "Musicians performing with musical instruments.",
            image: Culturals2,
            contact: {
                facultyCoordinator: [
                    {
                        name: "Michael Brown",
                        phone: "7654321098",
                        email: "michael.b@xyzmail.com",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Sarah Lee",
                        phone: "6543210987",
                        email: "sarah.lee@xyzmail.com",
                    },
                ],
            },
            registrationLink: "https://example.com/register/dance-performance", // Registration link
        },
        "culturals-event-3": {
            title: "Beat Battle",
            description:
                "Synchronized dance performance by group.",
            image: Culturals3,
            contact: {
                facultyCoordinator: [
                    {
                        name: "Michael Brown",
                        phone: "7654321098",
                        email: "michael.b@xyzmail.com",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Sarah Lee",
                        phone: "6543210987",
                        email: "sarah.lee@xyzmail.com",
                    },
                ],
            },
            registrationLink: "https://example.com/register/dance-performance", // Registration link
        },
        "culturals-event-4": {
            title: "Hashtag Hilarity",
            description:
                "Meme Creation-Humorous digital content with creativity.",
            image: Culturals4,
            contact: {
                facultyCoordinator: [
                    {
                        name: "Michael Brown",
                        phone: "7654321098",
                        email: "michael.b@xyzmail.com",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Sarah Lee",
                        phone: "6543210987",
                        email: "sarah.lee@xyzmail.com",
                    },
                ],
            },
            registrationLink: "https://example.com/register/dance-performance", // Registration link
        },

        // Workshop
        "workshop-1": {
            title: "Design for Testability (DFT) Demystified: The Basics you need to Know",
            description:
                "Join our workshop to gain a basic understanding of DFT and its importance in the semiconductor industry. Open to UG & PG students from all branches, with mandatory attendance for certification. Participation certificates will be provided to all attendees!",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contact: {
                facultyCoordinator: [
                    {
                        name: "Dr.S.Gomathi",
                        phone: "9894279244",
                    },
                    {
                        name: "Mr.S.Pradeep ",
                        phone: "812213986",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Hari Kesavaraj J , Second Year EE (VLSI D&T)",
                        phone: "8270278279",
                    },
                    {
                        name: "Aishvareiya V , Second Year EE (VLSI D&T)",
                        phone: "6374684519",
                    },
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
        "workshop-2": {
            title: "Digital Marketing",
            description:
                "Join our Digital Marketing Workshop to learn from industry experts Mr. Gowdham Subramaniam (Director, Seeka Host India) and Mr. Dinesh Kumar VM (General Manager, ClickDo, UK). Gain insights into digital marketing strategies and industry trends. Don’t miss this opportunity to enhance your marketing skills! 🚀",
            image: Workshop5,
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mr.P.Dinesh Kumar ",
                        phone: "9688837873",
                        email:"p.dineshkumar@ksrct.ac.in"
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Anisa F",
                        phone: "9942651212",
                        email:"anisafairoz@gmail.com"
                    },
                    {
                        name: "Balasastha E",
                        phone:"8056520787",
                        email:"balasastha85266@gmail.com"
                    },
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
        "workshop-3": {
            title: "Ui Path Supported Workshop” Robotic Process Automation”",
            description:
                "Join our UiPath-Supported Workshop on Robotic Process Automation (RPA) led by Mr. M. Senthil, Lead Technical Trainer at ICT Academy, Chennai. Gain hands-on experience in automation tools and techniques to enhance workflow efficiency. Don’t miss this opportunity to elevate your automation skills! 🚀",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mr N.Giridharan ",
                        phone: "8925325252",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Gowrinath V",
                        phone: "8056570574",
                        
                    },
                    {
                        name: "Durga S",
                        phone:"9080191925",
                        
                    },
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
        "workshop-4": {
            title: "AI on Game Developing",
            description:
                "The AI on Game Developing Workshop, organized by IITM Pravartak Technologies Foundation, is a two-day event designed to introduce participants to the integration of Artificial Intelligence (AI) in game development. This hands-on workshop covers key AI techniques such as pathfinding, decision-making algorithms, and neural networks, enabling participants to create intelligent game characters, optimize game mechanics, and enhance player experience. Open to students, professionals, and AI/game development enthusiasts, no prior experience is required—just a basic understanding of programming is recommended. Inter-specialization teams are welcome, and registration is free! 🚀🎮",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mrs. R.S. Sivaranjani (AP/CSE(AIML))",
                        email:"sivaranjani.rs@ksrct.ac.in",
                        phone: "9677055783",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Surendra Krishana R (III-Year/CSE(AIML))",
                        email:"surendirakrishna.info@gmail.com",
                        phone: "8438878063",
                        
                    },
                    {
                        name: "Sriharan S (III-Year/CSE(AIML))",
                        email:"sriharan2544@gmail.com",
                        phone:"9629729009",
                        
                    },
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
        "workshop-5": {
            title: "Unlocking Digital Potential: A Workshop on Modern Marketing",
            description:
                "Join Unlocking Digital Potential: A Workshop on Modern Marketing led by Mr. M. Ranjith Prasanth, Digital Marketer at Virtuspark Technologies Pvt. Ltd., Erode. Gain insights into the latest digital marketing trends and strategies. Don't miss this opportunity to enhance your marketing skills! 🚀",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contact: {
                facultyCoordinator: [
                    {
                       
                    },
                ],
                studentCoordinator: [
                    {
                        
                    },
                    {
                       
                    },
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
        "workshop-6": {
            title: "Mobile Application Development By RemitBee India Private Limited - Chennai",
            description:
                "In today’s digital world, mobile applications are a key driver of how individuals and businesses engage with technology. This Mobile Application Development Workshop aims to equip participants with a solid grasp of mobile app development across both Android and iOS platforms. The workshop will feature hands-on training, live coding, and a mini-project to implement learned concepts in practice",
            image: Workshop6,
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mr K.Dinesh Kumar",
                        email:"dineshkumark@ksrct.ac.in",
                        phone: "9360287212",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Alyushra A",
                        email:"alyushra96@gmail.com",
                        phone: "6369548280",
                        
                    },
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
        "workshop-7": {
            title: "Do Engineering using NI LabVIEW By Mew Technology, Bangalore",
            description:
                "Participants will learn to create virtual instruments, control hardware, and analyze data. The workshop focuses on practical applications in engineering and control systems. The LabVIEW workshop covers topics like graphical programming, data acquisition, and control systems design. Participants will explore creating virtual instruments, interfacing hardware, and data analysis techniques",
            image: Workshop1,
            contact: {
                facultyCoordinator: [
                    {
                        name: "Thangadurai A",
                        email:"thangaduraia@ksrct.ac.in",
                        phone: "9095322233",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Nivitha V P",
                        email:"nivithapalanisamy88@gmail.com",
                        phone: "9003344108",
                        
                    },
                    {
                        name: "Karmuhilan V",
                        email:"karmuhilan90252@gmail.com",
                        phone: "9025244374",
                        
                    },
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
        "workshop-8": {
            title: "Next Generation Sequencing technologies in Health Care By Genotypic Technology, Bengaluru",
            description:
                "An interactive workshop providing hands-on experience and insights into cutting-edge sequencing technologies.",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contact: {
                facultyCoordinator: [
                    {
                        name: "Dr. Puniethaa Prabhu",
                        email:"punithaa@ksrct.ac.in",
                        phone: "9080195801",
                    },
                    {
                        name: "Dr. Sidhra S",
                        email:"sidhra@ksrct.ac.in",
                        phone: "8870681797",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Javeed Akthar G",
                        email:"javeedakthar13@gmail.com",
                        phone: "9345647270",
                        
                    },
                    {
                        name: "Sanjay Kumar K",
                        email:"sanjaysanjay212004@gmail.com",
                        phone: "8807076569",
                        
                    },
                    {
                        name: "Mohammed Arkam K",
                        email:"mohammedarkamsheriff@gmail.com",
                        phone: "7904655755",
                        
                    },
                    {
                        name: "Meriam Janitta J",
                        email:"janitta967@gmail.com",
                        phone: "7010347812",
                        
                    },
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
        "workshop-9": {
            title: "Soaring High: Hands-on Drone Building and Flight workshop By Garuda Aerospace",
            description:
                "Join our Hands-on Drone Building and Flight Workshop and experience the thrill of creating and flying your own drone! This interactive session covers drone assembly, aerodynamics, and real-world applications, giving you practical insights into UAV technology. With expert guidance, you'll build your drone from scratch and take it for a test flight, mastering essential piloting skills. Whether you're a beginner or a tech enthusiast, this workshop will elevate your knowledge and take you to new heights!",
            image: Workshop2,
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mr. S. Hari Prasadh",
                        email:"hariprasadh@ksrct.ac.in",
                        phone: "7092821630",
                    },
                    {
                        name: "Mr. R. Vivek",
                        email:"vivekr@ksrct.ac.in",
                        phone: "7200458826",
                    },
                ],
                studentCoordinator: [
                    {
                        name: "Soundarrajan A",
                        email:"soundarrajan2004@gmail.com",
                        phone: "9442727410",
                        
                    }
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
        "workshop-10": {
            title: "Industry IoT using LoRaWAN Technology By Enthu Technology Solutions India Pvt Ltd",
            description:
                "Workshop delves into LoRaWAN technology and its role in Industrial IoT (IIoT), enabling long-range, low-power wireless communication for various applications. Participants will gain insights into LoRaWAN architecture, device communication, network deployment, and security protocols. The workshop will cover smart manufacturing, asset tracking, environmental monitoring, and predictive maintenance, with hands-on sessions and real-world case studies to equip attendees with practical skills for implementing IoT solutions in industrial automation and efficiency.",
            image: Workshop1,
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mrs. Jayamani S (AP/ECE)",
                        email:"jayamani@ksrct.ac.in",
                        phone: "9629297054",
                    }
                ],
                studentCoordinator: [
                    {
                        name: "Nishathini (III-Year/ECE)",
                        email:"nishanthinirajendren12@gmail.com",
                        phone: "8838948748",
                        
                    },
                    {
                        name: "Rithan V (II-Year/ECE)",
                        email:"rithanv78@gmail.com",
                        phone: "9025033891",
                        
                    },
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
        "workshop-11": {
            title: "Millet Fiesta: From Farm To Fork By Technical  Director Dr. P. Sathiyamoorthy ,Moon Foods",
            description:
                "'Value Addition in Millet': Millets are highly nutritious, climate-resilient grains that offer immense potential for health benefits and economic growth. This workshop aims to explore innovative ways to enhance the value of millets through processing, product development, and marketing strategies.",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contact: {
                facultyCoordinator: [
                    {
                        name: "Mr. S. Nithishkumar, AP/FT",
                        phone: "8973333396",
                    }
                ],
                studentCoordinator: [
                    {
                        name: "Pugazh Vendhan R, III Year/FT",
                        phone: "7550348891",
                        
                    },
                    {
                        name: "Shahana B, II Year/FT",
                        phone: "7418883634",
                        
                    },
                    {
                        name: "Santhosh S, II Year/FT",
                        phone: "7305844895",
                    },
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
        "workshop-12": {
            title: "Design and development of automotive Product By Mr.K.Santhosh Kumar, Support Manger, Macro Technology Pvt Ltd, Erode.",
            description:
                "The Design and Development of Automotive Products is a comprehensive process that combines innovation, engineering, and cutting-edge technology to create high-performance vehicles and components. From conceptualization and prototyping to testing and manufacturing, this process ensures safety, efficiency, and sustainability in automotive solutions. Engineers and designers work collaboratively to optimize aerodynamics, materials, and electronic systems, integrating advanced technologies like AI, IoT, and automation. Whether developing electric vehicles, smart mobility solutions, or high-performance car components, this field plays a crucial role in shaping the future of transportation. ",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contact: {
                facultyCoordinator: [
                    {
                        name: "Dr.K.Raja",
                        email: "rajak@ksrct.ac.in",
                        phone: "9842314481",
                    }
                ],
                studentCoordinator: [
                    {
                        name: "Lingeshwaran S L",
                        email: "lingeshwaransl04@gmail.com",                       
                    },                    
                ],
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
    };
    
    // Define animation variants
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const ScrollAnimation = ({ children }) => {
        const controls = useAnimation();
        const [ref, inView] = useInView();

        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
        }, [controls, inView]);

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        );
    };

    const event = eventDetails[eventId];

    if (!event) {
        return <div className="text-center text-3xl font-bold mt-24">Event not found!</div>;
    }

    const [openRound, setOpenRound] = useState(null);

    const toggleRound = (round) => {
        setOpenRound(openRound === round ? null : round);
    };

    // Infinite Pulsing Animation for Button
    const pulseAnimation = {
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const isTechnicalOrNonTechnical = eventId.startsWith("technical-event") || eventId.startsWith("non-technical-event");

    return (
        <div className="p-4 md:p-10 mt-24 text-white min-h-screen">
            <div className="max-w-4xl mx-auto text-white p-4 md:p-6">
                <ScrollAnimation>
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#9DD3FF]">{event.title}</h1>
                </ScrollAnimation>

                {/* Register Now Button */}
                <motion.button
                    className="mb-8 w-full md:w-auto md:ml-72 px-6 py-3 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-xl md:text-2xl shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.9 }}
                    variants={pulseAnimation} // Infinite pulsing animation
                    animate="animate" // Ensure the animation is always running
                    onClick={() => window.open(event.registrationLink, "_blank")} // Open registration link in a new tab
                >
                    REGISTER NOW!
                </motion.button>

                <ScrollAnimation>
                    <div className="border border-sky-800 p-2">
                        <div className="text-center border border-sky-800 clip-bottom-right flex flex-col gap-4 p-4 md:p-10 items-center bg-sky-900/20">
                            <p className="font-semibold text-2xl md:text-3xl text-sky-600 border border-sky-800 px-3 py-3">Description</p>
                            <img src={event.image} alt={event.title} className="w-40 h-40 md:w-56 md:h-56 object-cover mb-4 shadow-md" />
                            <p className="text-lg md:text-xl mb-4 text-sky-600">{event.description}</p>
                        </div>
                    </div>
                </ScrollAnimation>

                {isTechnicalOrNonTechnical && (
                    <>
                        <ScrollAnimation>
                            <div className="flex flex-col md:flex-row justify-between my-10 gap-4">
                                {['Description', 'Rounds', 'Rules', 'Schedule', 'Contact'].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="border-2 border-sky-900 p-1"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <h1 className="bg-sky-900 px-4 md:px-10 py-3 text-sky-300 bg-opacity-80 clip-bottom-right-2">{item}</h1>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollAnimation>

                        {/* Rounds Section */}
                        <ScrollAnimation>
                            <div className="border border-sky-800 p-2">
                                <div className="border border-sky-800 shadow-lg p-4 md:p-10">
                                    <h2 className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">Rounds</h2>
                                    <div className="flex flex-col gap-7">
                                        {event.rounds.map((round, index) => (
                                            <motion.div key={index} className="flex flex-col gap-3" variants={itemVariants}>
                                                <h1 className="font-semibold text-xl md:text-2xl text-sky-600">{round.title}</h1>
                                                {/* Check if description is an array and render as a list */}
                                                {Array.isArray(round.description) ? (
                                                    <ul className="list-disc pl-6 text-lg md:text-xl text-sky-300">
                                                        {round.description.map((point, i) => (
                                                            <li key={i}>{point}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-lg md:text-xl text-sky-300">{round.description}</p>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Rules Section */}
                        <ScrollAnimation>
                            <div className="border border-sky-800 p-2 mt-6">
                                <div className="bg-sky-900/30 shadow-lg p-4 md:p-10">
                                    <h2 className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 bg-inherit border border-sky-800 px-3 py-3">Rules</h2>
                                    <ul className="list-disc pl-6 text-lg md:text-xl text-sky-300">
                                        {event.rules.map((rule, index) => (
                                            <motion.li key={index} variants={itemVariants}>
                                                {rule}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Schedule Section */}
                        <ScrollAnimation>
                            <div className="border border-sky-800 p-2 mt-6">
                                <div className="p-4 md:p-10">
                                    <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">Schedule</h2>
                                    {event.schedule.map((schedule, index) => (
                                        <motion.div key={index} className="border-gray-300 pb-2 mb-2" variants={itemVariants}>
                                            <motion.button
                                                className="flex justify-between items-center w-full text-lg md:text-xl font-medium p-3 border border-sky-800 text-sky-500 hover:bg-sky-700 transition-colors duration-300"
                                                onClick={() => toggleRound(index)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {schedule.round}
                                                {openRound === index ? <ChevronUp /> : <ChevronDown />}
                                            </motion.button>
                                            {openRound === index && (
                                                <motion.div
                                                    className="mt-2 p-3 border border-sky-900 bg-transparent text-gray-300"
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p className="text-base md:text-lg">Date: {schedule.date}</p>
                                                    <p className="text-base md:text-lg">Time: {schedule.time}</p>
                                                    <p className="text-base md:text-lg">Location: {schedule.location}</p>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimation>
                    </>
                )}

                {/* Contact Section */}
                <ScrollAnimation>
                    <div className="border border-sky-800 p-3 mt-6">
                        <div className="bg-sky-900/20 p-4 md:p-10">
                            <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 text-sky-600 border border-sky-800 px-3 py-3">Contact</h2>

                            {/* Faculty Coordinator Contact Details */}
                            <div className="mb-8">
                                <h3 className="text-xl md:text-2xl font-semibold text-sky-500 mb-4">Faculty Coordinator</h3>
                                {event.contact.facultyCoordinator.map((coordinator, index) => (
                                    <div key={index} className="mb-4">
                                        <p className="text-lg md:text-xl text-sky-300">{coordinator.name}</p>
                                        <p className="text-lg md:text-xl text-sky-300">{coordinator.phone}</p>
                                        <p className="text-lg md:text-xl text-sky-300">{coordinator.email}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Student Coordinator Contact Details */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-sky-500 mb-4">Student Coordinator</h3>
                                {event.contact.studentCoordinator.map((coordinator, index) => (
                                    <div key={index} className="mb-4">
                                        <p className="text-lg md:text-xl text-sky-300">{coordinator.name}</p>
                                        <p className="text-lg md:text-xl text-sky-300">{coordinator.phone}</p>
                                        <p className="text-lg md:text-xl text-sky-300">{coordinator.email}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default EventDetails;