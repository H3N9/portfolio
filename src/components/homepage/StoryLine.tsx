import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/system';
import { Container, Grid, styled, Typography } from '@mui/material';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ToolContainer from './storiesLine/ToolContainer';
import { programmingIcons } from '@utills/iconsStory';
import Summary from './storiesLine/Summary';

const BoxLeft = styled(Box)({
  position: 'absolute',
  width: '100%',
});

interface StoryLineProps {}

const StoryLine: React.FC<StoryLineProps> = () => {
  const lengthContentMask = 3;
  const scaleHeight = 2;
  const container = useRef<HTMLDivElement>(null);
  const contentMask = useRef<HTMLDivElement>(null);
  const contentContainer = useRef<HTMLDivElement>(null);
  const titleMask = useRef<HTMLDivElement>(null);
  const titleContainer = useRef<HTMLElement>(null);
  const summaryMask = useRef<HTMLElement>(null);
  const containerSummary = useRef<HTMLElement>(null);
  const containerTextSummary = useRef<HTMLElement>(null);

  useEffect(() => {
    const windowHeight = window.innerHeight * scaleHeight;
    const contentMaskChildren = contentMask.current?.children ?? [];
    const contentContainerChildren = contentContainer.current?.children ?? [];
    const firstTitle: any = titleContainer.current?.firstChild;
    const lastTitle: any = titleContainer.current?.lastChild;

    const allContentMask: Array<HTMLElement> =
      gsap.utils.toArray(contentMaskChildren);
    const allContentContainer: Array<HTMLElement> = gsap.utils.toArray(
      contentContainerChildren
    );

    ScrollTrigger.create({
      trigger: container.current,
      end: `+=${windowHeight * 3.5} top`,
      pin: true,
      markers: true,
    });

    ScrollTrigger.create({
      trigger: titleMask.current,
      //markers: true,
      start: `+=${windowHeight * 2}`,
      end: `+=${windowHeight * 2}`,
      pin: true,
      animation: gsap
        .timeline()
        .to(firstTitle, {
          autoAlpha: 0,
        })
        .to(lastTitle, {
          autoAlpha: 1,
        }),
      toggleActions: 'play reverse play reverse',
    });

    ScrollTrigger.create({
      trigger: summaryMask.current,
      markers: true,
      animation: gsap
        .timeline()
        .from(containerSummary.current, {
          width: 0,
          height: 0,
          duration: 0.3,
          ease: 'none',
        })
        .to(containerSummary.current, {
          width: Math.max(window.innerHeight, window.innerWidth) * 2,
          ease: 'none',
          height: Math.max(window.innerHeight, window.innerWidth) * 2,
          duration: 0.3,
        }),
      toggleActions: 'play none none reverse',
      pin: true,
    });

    allContentMask.forEach((element: HTMLElement, index: number): void => {
      const timeline = gsap.timeline();
      timeline
        .from(allContentContainer[index]?.firstChild, {
          opacity: 0,
          yPercent: 10,
          delay: 0.8,
        })
        .from(allContentContainer[index]?.lastChild, {
          opacity: 0,
          yPercent: 10,
        });
      ScrollTrigger.create({
        trigger: element,
        markers: true,
        end: `+=${windowHeight}`,
        pin: true,
        animation: timeline,
        toggleActions: 'play reverse play reverse',
      });
    });
  }, []);

  return (
    <Box sx={{ width: '100%', height: 'fit-content' }}>
      <Box
        ref={container}
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'secondary.main',
        }}
      >
        <Box
          ref={titleMask}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: `0%`,
          }}
        />
        <Box
          ref={titleMask}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: `0%`,
          }}
        />
        <Box
          ref={summaryMask}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: `${lengthContentMask * 100 * scaleHeight}%`,
          }}
        />
        <Box ref={contentMask}>
          {Array.from({ length: lengthContentMask }, (_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: `${100 * i * scaleHeight}%`,
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <Summary
            container={containerSummary}
            textFading={containerTextSummary}
          />
        </Box>
        <Container
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '80%',
            }}
          >
            <Box
              sx={{ position: 'relative', height: '10%' }}
              ref={titleContainer}
            >
              <Typography
                variant="h3"
                sx={{
                  pb: 2,
                  color: 'primary.main',
                  position: 'absolute',
                }}
              >
                Experiences
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  pb: 2,
                  color: 'primary.main',
                  position: 'absolute',
                  opacity: 0,
                }}
              >
                Expertises
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: 'secondary.main',
                boxShadow: '0px 4px 40px 15px rgba(0, 0, 0, 0.25)',
                width: '100%',
                height: '90%',
                display: 'flex',
                p: 4,
              }}
            >
              <Box>
                <Image
                  src="/static/images/homepage/computer.svg"
                  alt="computer"
                  width={43}
                  height={38}
                />
                <Box
                  sx={{
                    height: 'calc(100% - 38px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: '#BABABA',
                  }}
                >
                  <Typography>{'<h3>'}</Typography>
                  <Box
                    sx={{
                      height: 'calc(100% - 48px)',
                      width: '1px',
                      bgcolor: '#BABABA',
                    }}
                  />
                  <Typography>{'</h3>'}</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  color: 'primary.main',
                  pl: 3,
                  position: 'relative',
                  width: '100%',
                }}
                ref={contentContainer}
              >
                <BoxLeft>
                  <Typography sx={{ height: 52 }} variant="h4">
                    Title
                  </Typography>
                  <Typography variant="h6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry is
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </BoxLeft>
                <BoxLeft>
                  <Typography sx={{ height: 52 }} variant="h4">
                    Title
                  </Typography>
                  <Typography variant="h6">
                    Lorem Ipsum is simply dummy text of the printing and
                  </Typography>
                </BoxLeft>
                <BoxLeft>
                  <Typography sx={{ height: 38 }} variant="h4">
                    Title
                  </Typography>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6">
                        Lorem Ipsum is simply dummy text of the printing and
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <ToolContainer
                        tools={programmingIcons}
                        title="Programing Language"
                      />
                    </Grid>
                  </Grid>
                </BoxLeft>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default StoryLine;
