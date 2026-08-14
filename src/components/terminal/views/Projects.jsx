import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const galleryByFolder = {
    "Technical Report IT Technology - 4th Semester": [
      "/images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-16.png",
      "/images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-17.png",
      "/images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-18.png",
      "/images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-19.png",
      "/images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-6.png",
      "/images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-7.png"
    ],
    "PCB Design & Electronics Project": [
      "/images/ATmega 1284 PCB/PCB Journal-image-1.jpg",
      "/images/ATmega 1284 PCB/PCB Journal-image-2.jpg",
      "/images/ATmega 1284 PCB/PCB Journal-image-3.png",
      "/images/ATmega 1284 PCB/PCB Journal-image-4.png",
      "/images/ATmega 1284 PCB/PCB Journal-image-6.png"
    ],
    "Third Semester Final Project": [
      "/images/AIDS - 3rd SEM/Third semester - Final project Report-image-14.jpg",
      "/images/AIDS - 3rd SEM/Third semester - Final project Report-image-15.jpg",
      "/images/AIDS - 3rd SEM/Third semester - Final project Report-image-16.jpg",
      "/images/AIDS - 3rd SEM/Third semester - Final project Report-image-17.jpg",
      "/images/AIDS - 3rd SEM/Third semester - Final project Report-image-18.jpg",
      "/images/AIDS - 3rd SEM/Third semester - Final project Report-image-20.jpg"
    ]
  }

  const projects = [
    {
      title: "VR Gym",
      date: "27/12/2021 - 08/05/2024",
      description: "A VR company that replicates the Sports Gym medium in VR by having zumba, yoga and other fitness focused classes.",
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
      description: "Comprehensive technical research and implementation project covering advanced IT technologies, embedded systems integration, and system design patterns.",
      technologies: "Embedded Systems, C/C++, Arduino, IoT, Networking, Linux",
      responsibilities: [
        "Research and document IT technology advancements",
        "Design and implement embedded systems solutions",
        "Test and calibrate sensor systems in real-time",
        "Create technical documentation and reports",
        "Analyze system performance and optimization"
      ],
      imageUrl: "/images/Thermal Googles- 4th SEM/Technical Report IT Technology - 4th SEM-image-16.png",
      images: galleryByFolder["Technical Report IT Technology - 4th Semester"],
      reportUrl: "/reports/Technical-Report-IT-Technology-4th-SEM.pdf",
      reportName: "Technical-Report-IT-Technology-4th-SEM.pdf"
    },
    {
      title: "PCB Design & Electronics Project",
      date: "01/06/2023 - 31/08/2023",
      description: "PCB (Printed Circuit Board) design and fabrication project focusing on electronics prototyping, circuit design, and hardware assembly.",
      technologies: "PCB Design Tools, KiCAD, Electronics, Microcontrollers, Soldering, Circuitry",
      responsibilities: [
        "Design PCB layouts and schematics",
        "Component selection and sourcing",
        "Hardware prototyping and assembly",
        "Testing and debugging circuits",
        "Documentation of design specifications",
        "Troubleshooting and optimization of hardware"
      ],
      imageUrl: "/images/ATmega 1284 PCB/PCB Journal-image-1.jpg",
      images: galleryByFolder["PCB Design & Electronics Project"],
      reportUrl: "/reports/PCB-Journal.pdf",
      reportName: "PCB-Journal.pdf"
    },
    {
      title: "Third Semester Final Project",
      date: "01/09/2022 - 31/12/2022",
      description: "Capstone project for third semester integrating multiple technologies and showcasing problem-solving skills in a real-world application.",
      technologies: "Full-Stack Development, Programming, Database Design, Project Management",
      responsibilities: [
        "Conceptualize and design project architecture",
        "Implement core functionality and features",
        "Manage project timeline and deliverables",
        "Test and deploy final solution",
        "Present findings and technical documentation",
        "Collaborate with team members on development"
      ],
      imageUrl: "/images/AIDS - 3rd SEM/Third semester - Final project Report-image-14.jpg",
      images: galleryByFolder["Third Semester Final Project"],
      reportUrl: "/reports/Third-Semester-Final-Project-Report.pdf",
      reportName: "Third-Semester-Final-Project-Report.pdf"
    },
    {
      title: "Mini Pupper ROS Robotics - Hackathon 2022",
      date: "15/09/2022 - 20/09/2022",
      description: "Intensive one-week hackathon project building and programming the Mini Pupper ROS robotic kit, testing robotics engineering and programming skills under pressure.",
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
        ▸ PROJECTS
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
