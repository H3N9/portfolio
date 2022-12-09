import React from 'react';
import { Grid, Typography, styled, Box } from '@mui/material';
import { toolIcons } from '@utills/iconsStory';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const DevicesPack = dynamic(() => import('../materials/DevicesPack'));
const ToolContainer = dynamic(() => import('../storiesLine/ToolContainer'));

const BoxLeft = styled(Box)({
  position: 'absolute',
  height: '100%',
});

interface ContentSectionProps {
  deviceContainer: React.RefObject<HTMLElement>;
  toolContainer: React.RefObject<HTMLElement>;
}
interface TittleHeadProps {
  title: string;
}

interface DescriptTextProps {
  description: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  deviceContainer,
  toolContainer,
}) => {
  const { t } = useTranslation('homepage');
  return (
    <>
      <BoxLeft>
        <TitleHead title={t('experiences.card-1.title')} />

        <Grid container sx={{ maxHeight: '90%', height: 1 }} spacing={2}>
          <Grid item xs={12}>
            <DescriptText description={t('experiences.card-1.description')} />
          </Grid>
          <Grid
            item
            md={12}
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              position: 'relative',
              justifyContent: 'center',
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
        <TitleHead title={t('experiences.card-2.title')} />
        <Grid container sx={{ maxHeight: '90%', height: 1 }} spacing={2}>
          <Grid item xs={12}>
            <DescriptText description={t('experiences.card-2.description')} />
          </Grid>
          <Grid item md={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <DevicesPack deviceContainer={deviceContainer} />
          </Grid>
        </Grid>
      </BoxLeft>
      <BoxLeft>
        <TitleHead title={t('expertise.title')} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <DescriptText description={t('expertise.description')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ToolContainer tools={toolIcons} toolContainer={toolContainer} />
          </Grid>
        </Grid>
      </BoxLeft>
    </>
  );
};

const TitleHead: React.FC<TittleHeadProps> = ({ title }) => {
  return (
    <Typography
      sx={{
        fontSize: { md: 24, xs: 20 },
        maxHeight: '20%',
        minHeight: 54,
        fontWeight: 'bold',
      }}
    >
      {title}
    </Typography>
  );
};

const DescriptText: React.FC<DescriptTextProps> = ({ description }) => {
  return (
    <Typography
      sx={{
        fontSize: { md: 20, xs: 16 },
        textIndent: 46,
        textAlign: 'justify',
      }}
    >
      {description}
    </Typography>
  );
};

export default ContentSection;
