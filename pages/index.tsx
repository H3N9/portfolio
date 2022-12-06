import Contact from '@components/homepage/Contact';
import HeadSection from '@components/homepage/sections/HeadSection';
import StoryLine from '@components/homepage/StoryLine';
import { Box } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const Index = () => {
  const { t } = useTranslation('common');
  return (
    <Box>
      <HeadSection />
      <StoryLine />
      <Contact />
    </Box>
  );
};

export default Index;
