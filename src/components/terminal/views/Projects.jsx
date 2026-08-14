import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const base = import.meta.env.BASE_URL

  const galleryByFolder = {
    "Technical Report IT Technology - 4th Semester": [
      `${base}images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-16.png`,
      `${base}images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-17.png`,
      `${base}images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-18.png`,
      `${base}images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-19.png`,
      `${base}images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-6.png`,
      `${base}images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-7.png`
    ],
    "PCB Design & Electronics Project": [
      `${base}images/ATmega 1284 PCB/PCB Journal-image-1.jpg`,
      `${base}images/ATmega 1284 PCB/PCB Journal-image-2.jpg`,
      `${base}images/ATmega 1284 PCB/PCB Journal-image-3.png`,
      `${base}images/ATmega 1284 PCB/PCB Journal-image-4.png`,
      `${base}images/ATmega 1284 PCB/PCB Journal-image-6.png`
    ],
    "Third Semester Final Project": [
      `${base}images/AIDS - 3rd SEM/Third semester - Final project Report-image-14.jpg`,
      `${base}images/AIDS - 3rd SEM/Third semester - Final project Report-image-15.jpg`,
      `${base}images/AIDS - 3rd SEM/Third semester - Final project Report-image-16.jpg`,
      `${base}images/AIDS - 3rd SEM/Third semester - Final project Report-image-17.jpg`,
      `${base}images/AIDS - 3rd SEM/Third semester - Final project Report-image-18.jpg`,
      `${base}images/AIDS - 3rd SEM/Third semester - Final project Report-image-20.jpg`
    ]
  }

  const projects = [
    {
      title: "VR Gym",
      date: "27/12/2021 - 08/05/2024",
      description: "A VR company replicates the sports gym experience in virtual reality by running live and on-demand fitness classes in shared immersive sessions, with a responsive website where members can discover classes, book training sessions, manage memberships, and track their activity. The project included secure account management with role-based member/trainer experiences, subscription and payment lifecycle logic, and integrated automated email communication. The platform also stays synchronized with the VR platform so class availability and occupancy data are always current.",
      technologies: "React, JavaScript, HTML5, CSS, Klaviyo, Payment Integration, REST APIs",
      responsibilities: [
        "Build and design their website with responsive UI",
        "Manage customer accounts and user authentication",
        "Set up automated emails with Klaviyo",
        "Manage membership payments and subscriptions",
        "Create dynamic live connection between website and VR platform",
        "Implement responsive design for mobile and desktop"
      ],
      imageUrl: null,
      images: [],
      reportUrl: null,
      reportName: "VR-Gym-Portfolio.pdf"
    },
    {
      title: "Technical Report IT Technology - 4th Semester",
      date: "01/09/2023 - 31/12/2023",
      description: "This technical report project explored advanced IT technologies through the design and implementation of an embedded systems solution with a strong focus on IoT sensor integration, thermal measurement workflows, and system architecture. It involved connecting microcontrollers and networking components into a robust data pipeline, logging and validating sensor data, and tuning acquisition parameters for stable real-world performance. The outcome was a full report that includes architecture documentation, testing methodology, and concrete recommendations for future optimisation.",
      technologies: "Embedded Systems, C/C++, Arduino, IoT, Networking, Linux",
      responsibilities: [
        "Research and document IT technology advancements",
        "Design and implement embedded systems solutions",
        "Test and calibrate sensor systems in real-time",
        "Create technical documentation and reports",
        "Analyze system performance and optimization"
      ],
      imageUrl: `${base}images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-16.png`,
      images: galleryByFolder["Technical Report IT Technology - 4th Semester"],
      reportUrl: `${base}reports/Technical-Report-IT-Technology-4th-SEM.pdf`,
      reportName: "Technical-Report-IT-Technology-4th-SEM.pdf"
    },
    {
      title: "PCB Design & Electronics Project",
      date: "01/06/2023 - 31/08/2023",
      description: "This project covered complete PCB design and prototyping, starting from schematic definition through layout review and hardware assembly. It focused on improving signal quality and practical build quality through iterative revisions, while balancing part selection, manufacturability, and thermal considerations. Each revision was tested and debugged, then documented with pin maps and test setups to maintain consistency and create a reliable reference for future development.",
      technologies: "PCB Design Tools, KiCAD, Electronics, Microcontrollers, Soldering, Circuitry",
      responsibilities: [
        "Design PCB layouts and schematics",
        "Component selection and sourcing",
        "Hardware prototyping and assembly",
        "Testing and debugging circuits",
        "Documentation of design specifications",
        "Troubleshooting and optimization of hardware"
      ],
      imageUrl: `${base}images/ATmega 1284 PCB/PCB Journal-image-1.jpg`,
      images: galleryByFolder["PCB Design & Electronics Project"],
      reportUrl: `${base}reports/PCB-Journal.pdf`,
      reportName: "PCB-Journal.pdf"
    },
    {
      title: "Third Semester Final Project",
      date: "01/09/2022 - 31/12/2022",
      description: "This was a capstone project spanning planning, architecture, implementation, and delivery of a practical software solution that combined backend, frontend, and data design work. The work was coordinated across milestones with regular progress checks, testing cycles, and troubleshooting to ensure reliability before final validation. Alongside implementation, the project included technical documentation that communicates design decisions and supports long-term maintainability.",
      technologies: "Full-Stack Development, Programming, Database Design, Project Management",
      responsibilities: [
        "Conceptualize and design project architecture",
        "Implement core functionality and features",
        "Manage project timeline and deliverables",
        "Test and deploy final solution",
        "Present findings and technical documentation",
        "Collaborate with team members on development"
      ],
      imageUrl: `${base}images/AIDS - 3rd SEM/Third semester - Final project Report-image-14.jpg`,
      images: galleryByFolder["Third Semester Final Project"],
      reportUrl: `${base}reports/Third-Semester-Final-Project-Report.pdf`,
      reportName: "Third-Semester-Final-Project-Report.pdf"
    },
    {
      title: "Mini Pupper ROS Robotics - Hackathon 2022",
      date: "15/09/2022 - 20/09/2022",
      description: "This one-week hackathon project involved assembling and programming the Mini Pupper ROS robotics kit to execute movement and sensor-driven behavior under tight time constraints. The team configured ROS communication topics, debugged command feedback flows, and tuned movement logic for repeatable behavior across test runs. The final result was a working demonstration delivered on deadline, with iterative problem-solving and rapid refinements throughout the event.",
      technologies: "ROS (Robot Operating System), Python, C++, Robot Control Systems, Linux",
      responsibilities: [
        "Reverse engineer the Mini Pupper ROS kit",
        "Program robot control algorithms",
        "Implement movement and sensor integration",
        "Troubleshoot and debug robotic systems",
        "Work effectively under tight time constraints",
        "Collaborate with team members on engineering tasks"
      ],
      imageUrl: null,
      images: [],
      reportUrl: null,
      reportName: "Mini-Pupper-Hackathon-2022.pdf"
    }
  ]

  return (
    <div className="pl-4 pt-4 pb-4">
      <div style={{color: '#7fb342', fontSize: '1.2rem', marginBottom: '1.5rem'}}>
        &gt;&gt; PROJECTS
      </div>
      <div>
        {projects.map((project, idx) => (
        <ProjectCard
            key={idx}
            title={project.title}
            date={project.date}
            description={project.description}
            technologies={project.technologies}
            responsibilities={project.responsibilities}
            imageUrl={project.imageUrl}
            imageSources={project.images}
            reportUrl={project.reportUrl}
            reportName={project.reportName}
          />
        ))}
      </div>
    </div>
  )
}
