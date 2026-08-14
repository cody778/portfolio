// PROJECTS SETUP GUIDE

/*
HOW TO ADD A NEW PROJECT:

1. Open src/components/terminal/views/Projects.jsx

2. In the projects array, add a new object following this template:
   
   {
     title: "Project Name",
     date: "DD/MM/YYYY - DD/MM/YYYY",
     description: "What does this project do?",
     technologies: "React, Node.js, MongoDB, etc.",
     responsibilities: [
       "What you did on this project",
       "Another responsibility",
       "Third responsibility"
     ],
     imageUrl: "/images/project-name.jpg" // optional
   }

3. TO ADD IMAGES:
   - Place your project images in: public/images/
   - Reference them as: "/images/filename.jpg"
   - Recommended: 250x200px for good display
   - The image placeholder shows [Project Image] if imageUrl is null

4. THE ProjectCard COMPONENT HANDLES:
   - Responsive layout (image + info side by side on desktop, stacked on mobile)
   - Color-coded sections (green headers, grey text)
   - Image placeholder when no image is provided
   - Automatic formatting of all content

EXAMPLE:
{
  title: "VR Gym",
  date: "27/12/2021 - 08/05/2024",
  description: "A VR platform for fitness classes",
  technologies: "React, Klaviyo, Stripe",
  responsibilities: [
    "Built responsive website",
    "Integrated payment system",
    "Set up email automation"
  ],
  imageUrl: "/images/vr-gym.jpg"
}

That's it! Just add your project to the array and it will automatically render.
*/
