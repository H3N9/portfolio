import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/system';
import {
  Container,
  Typography,
  styled,
  Grid,
  Button,
  TypographyProps,
} from '@mui/material';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import { toolIcons } from '@utills/iconsStory';
import IconCard from './materials/IconCard';
import { useRouter } from 'next/router';

const TitleSection = dynamic(() => import('./sections/TitleSection'));

const DevicesPack = dynamic(() => import('./materials/DevicesPack'));

const BoxLeft = styled(Box)({
  position: 'absolute',
  height: '100%',
});

interface TittleHeadProps {
  title: string;
}

interface DescriptionTextProps extends TypographyProps {
  description: string;
}

interface StoryLineProps {}

const StoryLine: React.FC<StoryLineProps> = () => {
  const { t } = useTranslation('homepage');
  const lengthContentMask = 5;
  const scaleHeight = 1.5;
  const container = useRef<HTMLDivElement>(null);
  const contentMask = useRef<HTMLDivElement>(null);
  const contentContainer = useRef<HTMLDivElement>(null);
  const titleMask = useRef<HTMLDivElement>(null);
  const titleContainer = useRef<HTMLElement>(null);
  const summaryMask = useRef<HTMLElement>(null);
  const containerSummary = useRef<HTMLElement>(null);
  const containerTextSummary = useRef<HTMLElement>(null);
  const devicesContainer = useRef<HTMLElement>(null);
  const toolContainer = useRef<HTMLElement>(null);
  const router = useRouter();

  useEffect(() => {
    const animation = gsap.context(() => {
      if (
        contentMask.current &&
        contentContainer.current &&
        titleContainer.current
      ) {
        const windowHeight = window.innerHeight * scaleHeight;
        const contentMaskChildren = contentMask.current.children ?? [];
        const contentContainerChildren =
          contentContainer.current.children ?? [];
        const firstTitle: any = titleContainer.current.firstChild;
        const lastTitle: any = titleContainer.current.lastChild;

        const allContentMask: Array<HTMLElement> =
          gsap.utils.toArray(contentMaskChildren);
        const allContentContainer: Array<HTMLElement> = gsap.utils.toArray(
          contentContainerChildren
        );

        ScrollTrigger.create({
          trigger: container.current,
          end: `+=${windowHeight * (lengthContentMask + 1)} top`,
          pin: true,
        });

        ScrollTrigger.create({
          trigger: titleMask.current,
          start: `+=${windowHeight * 2}`,
          end: `+=${windowHeight * 2}`,
          pin: true,
          animation: gsap
            .timeline({ defaults: { duration: 1 } })
            .to(firstTitle, {
              width: 0,
            })
            .to(lastTitle, {
              width: '100%',
            }),
          toggleActions: 'play reverse play reverse',
        });

        ScrollTrigger.create({
          trigger: summaryMask.current,
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
          if (index === 3)
            timeline.to(
              [
                devicesContainer.current || [],
                devicesContainer.current?.children || [],
              ],
              {
                stagger: {
                  each: 0.1,
                  from: 'start',
                  ease: 'back.in',
                },
                yPercent: 5,
                opacity: 1,
              }
            );
          if (index === allContentMask.length - 1)
            timeline.to(
              [
                toolContainer.current || [],
                toolContainer.current?.children || [],
              ],
              {
                opacity: 1,
                yoyo: true,
                stagger: {
                  each: 0.1,
                  from: 'center',
                  axis: 'y',
                  grid: [2, 4],
                },
              }
            );
          ScrollTrigger.create({
            trigger: element,
            end: `+=${windowHeight}`,
            pin: true,
            animation: timeline,
            toggleActions: 'play reverse play reverse',
          });
        });
      }
    });
    return () => animation.clear();
  }, [containerSummary, contentMask, titleContainer]);

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
          <Box
            sx={{
              bgcolor: 'primary.main',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              position: 'absolute',
              overflow: 'hidden',
              zIndex: 3,
            }}
            ref={containerSummary}
          >
            <Container sx={{ height: '100%' }}>
              <Box
                ref={containerTextSummary}
                width="100%"
                height="100%"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  display: 'flex',
                  whiteSpace: 'nowrap',
                }}
              >
                <Typography
                  align="center"
                  sx={{ fontSize: { xs: 24, md: 60 } }}
                >
                  {t('conclusion.title')}
                </Typography>
                <Typography
                  align="center"
                  sx={{ fontSize: { xs: 20, md: 48 } }}
                >
                  {t('conclusion.persuade')}
                </Typography>
                <Box
                  display="flex"
                  sx={{
                    width: '100%',
                    justifyContent: 'center',
                    pt: 4,
                  }}
                >
                  <Button
                    onClick={() => router.push('/project')}
                    variant="text"
                    color="secondary"
                  >
                    {t('conclusion.see-more-project')}
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
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
              <TitleSection />
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
                  overflow: 'hidden',
                }}
                ref={contentContainer}
              >
                <BoxLeft>
                  <TitleHead title={t('experiences.card-4.title')} />

                  <Grid
                    container
                    sx={{ maxHeight: '90%', height: 1 }}
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <DescriptionText
                        description={t('experiences.card-4.description')}
                      />
                    </Grid>
                    <Grid
                      item
                      md={12}
                      sx={{
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'center',
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography>
                          <DescriptionText
                            sx={{ fontWeight: 600 }}
                            description={t('experiences.responsibility')}
                          />
                        </Typography>
                        <ul>
                          <li>
                            <DescriptionText
                              description={t('experiences.card-4.res-1')}
                            />
                          </li>
                          <li>
                            <DescriptionText
                              description={t('experiences.card-4.res-2')}
                            />
                          </li>
                          <li>
                            <DescriptionText
                              description={t('experiences.card-4.res-3')}
                            />
                          </li>
                          <li>
                            <DescriptionText
                              description={t('experiences.card-4.res-4')}
                            />
                          </li>
                        </ul>
                      </Box>
                    </Grid>
                  </Grid>
                </BoxLeft>
                <BoxLeft>
                  <TitleHead title={t('experiences.card-1.title')} />

                  <Grid
                    container
                    sx={{ maxHeight: '90%', height: 1 }}
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <DescriptionText
                        description={t('experiences.card-1.description')}
                      />
                    </Grid>
                    <Grid
                      item
                      md={12}
                      sx={{
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'center',
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography>
                          <DescriptionText
                            sx={{ fontWeight: 600 }}
                            description={t('experiences.responsibility')}
                          />
                        </Typography>
                        <ul>
                          <li>
                            <DescriptionText
                              description={t('experiences.card-1.res-1')}
                            />
                          </li>
                          <li>
                            <DescriptionText
                              description={t('experiences.card-1.res-2')}
                            />
                          </li>
                          <li>
                            <DescriptionText
                              description={t('experiences.card-1.res-3')}
                            />
                          </li>
                          <li>
                            <DescriptionText
                              description={t('experiences.card-1.res-4')}
                            />
                          </li>
                        </ul>
                      </Box>
                    </Grid>
                  </Grid>
                </BoxLeft>
                <BoxLeft>
                  <TitleHead title={t('experiences.card-2.title')} />
                  <Grid
                    container
                    sx={{ maxHeight: '90%', height: 1 }}
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <DescriptionText
                        description={t('experiences.card-2.description')}
                      />
                    </Grid>
                    <Grid
                      item
                      md={12}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                      }}
                    >
                      <Image
                        src={'/static/images/homepage/progress.png'}
                        alt="progress"
                        width={400}
                        height={300}
                      />
                    </Grid>
                  </Grid>
                </BoxLeft>
                <BoxLeft>
                  <TitleHead title={t('experiences.card-3.title')} />
                  <Grid
                    container
                    sx={{ maxHeight: '90%', height: 1 }}
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <DescriptionText
                        description={t('experiences.card-3.description')}
                      />
                    </Grid>
                    <Grid
                      item
                      md={12}
                      sx={{ display: 'flex', alignItems: 'flex-end' }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                        }}
                        ref={devicesContainer}
                      >
                        <DevicesPack />
                      </Box>
                    </Grid>
                  </Grid>
                </BoxLeft>
                <BoxLeft>
                  <TitleHead title={t('expertise.title')} />
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          height: '100%',
                        }}
                      >
                        <DescriptionText
                          description={t('expertise.description')}
                        />
                        <Typography
                          sx={{
                            fontStyle: 'italic',
                            fontSize: { md: 20, sm: 16, xs: 12 },
                            fontWeight: 600,
                          }}
                        >{`"${t('expertise.quotation')}"`}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                        }}
                        ref={toolContainer}
                      >
                        {toolIcons.map((image, index) => (
                          <IconCard
                            image={image.icon}
                            alt={image.alt}
                            key={index}
                            title={image.title}
                            length={index}
                          />
                        ))}
                      </Box>
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

const TitleHead: React.FC<TittleHeadProps> = ({ title }) => {
  return (
    <Typography
      sx={{
        fontSize: { md: 24, sm: 20, xs: 14 },
        maxHeight: '20%',
        minHeight: 54,
        fontWeight: 'bold',
      }}
    >
      {title}
    </Typography>
  );
};

const DescriptionText: React.FC<DescriptionTextProps> = ({
  description,
  ...props
}) => {
  return (
    <Typography
      {...props}
      sx={{
        fontSize: { md: 20, sm: 16, xs: 11 },
        textIndent: 46,
        ...props.sx,
      }}
    >
      {description}
    </Typography>
  );
};

export default StoryLine;
