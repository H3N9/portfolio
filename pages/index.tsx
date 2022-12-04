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
  return <StoryLine />;
};

export default Index;
