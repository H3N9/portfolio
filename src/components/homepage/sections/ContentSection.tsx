import React from 'react';
import { Grid, Typography, styled, Box } from '@mui/material';
import ToolContainer from '../storiesLine/ToolContainer';
import { programmingIcons } from '@utills/iconsStory';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { devicesImage } from '@utills/utills';
import DevicesPack from '../materials/DevicesPack';

const BoxLeft = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
});

interface ContentSectionProps {
  deviceContainer: React.RefObject<HTMLElement>;
}
interface TittleHeadProps {
  title: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ deviceContainer }) => {
  const { t } = useTranslation('homepage');
  return (
    <>
      <BoxLeft>
        <TitleHead title={t('experiences.card-1.title')} />
        <Typography variant="h6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry is standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </BoxLeft>
      <BoxLeft>
        <TitleHead title={t('experiences.card-2.title')} />
        <Grid container sx={{ maxHeight: '90%', height: 1 }}>
          <Grid item xs={12}>
            <Typography variant="h6">{t('expertise.description')}</Typography>
          </Grid>
          <Grid item md={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <DevicesPack />
          </Grid>
        </Grid>
      </BoxLeft>
      <BoxLeft>
        <TitleHead title={t('expertise.title')} />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">{t('expertise.description')}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ToolContainer tools={programmingIcons} />
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

export default ContentSection;
