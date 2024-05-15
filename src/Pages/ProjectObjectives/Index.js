import React, { useEffect, useState } from 'react';
import ProjectObjectivesCard from '../../Components/ProjectObjectives/Index';
import Preloader from './../../Components/Preloader/index';
const ProjectObjectives = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (replace with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? <Preloader /> : <></>}
      <ProjectObjectivesCard />
    </div>
  );
};

export default ProjectObjectives;
