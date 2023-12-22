// ProjectsGrid.js

import React from "react";

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "PRODUCT 1",
      description: "Description for PRODUCT 1",
      imageUrl: "https://www.mybakingaddiction.com/wp-content/uploads/2019/07/Bobs-Redmill-Lemon-Cheesecake-8-of-15_resized.jpg",
    },
    {
      id: 2,
      title: "PRODUCT 2",
      description: "Description for PRODUCT 2",
      imageUrl: "https://img.bestrecipes.com.au/mOYFi_8Q/w643-h428-cfill-q90/br/2019/10/lemon-chicken-pasta-954652-2.jpg",
    },
  ];

  return (
    <div className="projects-grid">
   {projects.map((project) => (
     <div key={project.id} className="project-image-overlay">
       <img
         src={`${project.imageUrl}`}
         alt={project.title}
         className="project-image"
       />
       <div className="project-details">
         <h3>{project.title}</h3>
         <p>{project.description}</p>
       </div>
     </div>
   ))}
 </div>
  );
};

export default ProjectsGrid;
