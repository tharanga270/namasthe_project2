import React, { useEffect, useState } from 'react';
import LearnMoreCard from '../../Components/LearnMoreCard/Index';
import Preloader from './../../Components/Preloader/index';
const LearnMore = () => {
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
      <LearnMoreCard />
    </div>
  );
};

export default LearnMore;
