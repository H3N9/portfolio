import IntroProject from '@components/project/IntroProject';
import ProjectShowcase from '@components/project/ProjectShowcase';
import { Box } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'project'])),
    },
  };
};

const Project = () => {
  return (
    <Box>
      <IntroProject />
      <ProjectShowcase />
    </Box>
  );
};

export default Project;
