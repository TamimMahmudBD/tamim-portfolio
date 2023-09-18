import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import portfolio from '../public/assets/projects/portfolio.png';
import datastore from '../public/assets/projects/datastore.png'
import catering from '../public/assets/projects/catering.png'
import cloud from '../public/assets/projects/cloud.png'
import ProjectItem from './ProjectItem';
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-4 md:px-0 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#1488A1]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Portfolio for UI/UX'
            backgroundImg={portfolio}
            projectUrl='https://uiuxproject.netlify.app/'
            tech='React JS'
          />
          <ProjectItem
            title='Data Store App'
            backgroundImg={datastore}
            projectUrl='https://data-analytics-reactjs-tailwindcss.netlify.app/'
            tech='React JS'

          />
          <ProjectItem
            title='Catering Service'
            backgroundImg={catering}
            projectUrl='https://dhakacateringservice.netlify.app/'
            tech='React JS'

          />
          <ProjectItem
            title='Cloud Host'
            backgroundImg={cloud}
            projectUrl='https://cloud-project-reactjs-tailwindcss.netlify.app/'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;