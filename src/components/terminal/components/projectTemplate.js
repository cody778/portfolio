// Example of how to add more projects to the Projects view
// Copy this template and add it to the projects array in Projects.jsx
const base = import.meta.env.BASE_URL

export const projectTemplate = {
  title: "Project Name",
  date: "Start Date - End Date",
  description: "Brief description of the project and what it does, including the technical scope, implementation approach, and key outcomes in one paragraph.",
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
  description: "A full-stack e-commerce platform for online retail that handled product browsing, checkout, and order management with integrated payment support and inventory synchronization. It used React-based interfaces connected to API services for fast catalog filtering, cart persistence, and order workflows, while remaining optimized for performance through smarter request handling. Production readiness included deployment and monitoring to maintain stable releases during growth in traffic and usage.",
  technologies: "React, Node.js, Express, MongoDB, Stripe",
  responsibilities: [
    "Designed and built responsive frontend interface",
    "Implemented payment processing with Stripe",
    "Created REST API for product and order management",
    "Set up database schema and optimization",
    "Deployed to production with Docker"
  ],
  imageUrl: `${base}images/ecommerce-project.jpg`
}
