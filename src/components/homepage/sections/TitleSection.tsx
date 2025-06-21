import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

interface TitleSectionProps {}

const TitleSection: React.FC<TitleSectionProps> = () => {
  const { t } = useTranslation('homepage');
  const allTitle = [
    {
      title: t('content.title-1'),
    },
    {
      title: t('content.title-2'),
    },
  ];
  return (
    <>
      {allTitle.map((each, index) => (
        <Typography
          sx={{
            pb: 2,
            color: 'primary.main',
            position: 'absolute',
            width: allTitle.length - 1 === index ? 0 : 1,
            overflow: 'hidden',
            fontWeight: 700,
            fontSize: { md: 48, sm: 36, xs: 28 },
          }}
          key={index}
        >
          {each.title}
        </Typography>
      ))}
    </>
  );
};

export default TitleSection;
