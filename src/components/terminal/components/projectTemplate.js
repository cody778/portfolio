// Example of how to add more projects to the Projects view
// Copy this template and add it to the projects array in Projects.jsx

export const projectTemplate = {
  title: "Project Name",
  date: "Start Date - End Date",
  description: "Brief description of the project and what it does",
  technologies: "Tech Stack: React, Node.js, MongoDB, etc.",
  responsibilities: [
    "Responsibility 1",
    "Responsibility 2",
    "Responsibility 3"
  ],
  imageUrl: null // Add image path when available
}

// Example project with all fields filled:
export const exampleProject = {
  title: "E-Commerce Platform",
  date: "01/06/2023 - 31/12/2023",
  description: "A full-stack e-commerce platform for online retail with payment integration and inventory management.",
  technologies: "React, Node.js, Express, MongoDB, Stripe",
  responsibilities: [
    "Designed and built responsive frontend interface",
    "Implemented payment processing with Stripe",
    "Created REST API for product and order management",
    "Set up database schema and optimization",
    "Deployed to production with Docker"
  ],
  imageUrl: "/images/ecommerce-project.jpg"
}
