import { Box, Container, Typography, useTheme } from '@mui/material';
import { projectShowcase } from '@utills/projectUtill';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';

const ProjectCardDesktop = dynamic(() => import('./ProjectCardDesktop'));
const ProjectCardMobile = dynamic(() => import('./ProjectCardMobile'));

interface ProjectShowcaseProps {}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = () => {
  const { t } = useTranslation('project');
  const projectArray = projectShowcase(t);
  const projectContainer = useRef<HTMLDivElement>(null);
  const projectContainerMobile = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const mdSize = theme.breakpoints.values.md;

  useEffect(() => {
    const animation = gsap.context(() => {
      ScrollTrigger.refresh();
      const mediaMatch = gsap.matchMedia();
      mediaMatch.add(`(min-width: ${mdSize}px)`, () => {
        const projectChildren = projectContainer.current?.children ?? [];
        const allProjectChildren: Array<HTMLElement> =
          gsap.utils.toArray(projectChildren);
        allProjectChildren.forEach((element: HTMLElement) => {
          ScrollTrigger.create({
            trigger: element,
            start: 'top center',
            animation: gsap.from(element, {
              autoAlpha: 0,
              duration: 1,
              yPercent: 5,
            }),
          });
        });
      });
      mediaMatch.add(`(max-width: ${mdSize}px)`, () => {
        const projectChildrenMobile =
          projectContainerMobile.current?.children ?? [];

        const allProjectChildrenMobile: Array<HTMLElement> = gsap.utils.toArray(
          projectChildrenMobile
        );

        allProjectChildrenMobile.forEach((element: HTMLElement) => {
          ScrollTrigger.create({
            trigger: element,
            start: 'top center',
            animation: gsap.from(element, {
              autoAlpha: 0,
              duration: 1,
              yPercent: 5,
            }),
          });
        });
      });
    });
    return () => animation.clear();
  }, [mdSize]);

  return (
    <Container>
      <Box py={4} display="flex" alignItems="center">
        <Typography variant="h4">Some things I ve built</Typography>
        <Box
          sx={{
            bgcolor: 'secondary.main',
            width: '30%',
            height: 2,
            ml: 3,
            display: { xs: 'none', md: 'flex' },
          }}
        />
      </Box>
      <Box
        sx={{ display: { md: 'flex', xs: 'none', flexDirection: 'column' } }}
        ref={projectContainer}
      >
        {projectArray.map((project, index) => (
          <ProjectCardDesktop
            key={index}
            reverse={!!(index % 2)}
            {...project}
          />
        ))}
      </Box>

      <Box
        sx={{ display: { md: 'none', xs: 'flex', flexDirection: 'column' } }}
        ref={projectContainerMobile}
      >
        {projectArray.map((project, index) => (
          <ProjectCardMobile key={index} {...project} />
        ))}
      </Box>

      <Box height={300} width={1} />
    </Container>
  );
};

export default ProjectShowcase;
