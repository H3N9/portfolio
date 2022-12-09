import Loader from '@components/homepage/Loader';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import HeadSection from '@components/homepage/sections/HeadSection';

const StoryLine = dynamic(() => import('@components/homepage/StoryLine'));
const Contact = dynamic(() => import('@components/homepage/Contact'));

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'homepage'])),
    },
  };
};

const Index = () => {
  return (
    <>
      <HeadSection />
      <StoryLine />
      <Contact />
    </>
  );
};

export default Index;
