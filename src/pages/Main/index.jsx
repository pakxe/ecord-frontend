import React from 'react';
import Layout from '../../component/Layout/Layout';
import { ReactComponent as Ecord_Title } from '../../assets/svg/Ecord_Title.svg';
import { ReactComponent as Ecord } from '../../assets/svg/Ecord.svg';
import { ReactComponent as Intro_Image } from '../../assets/svg/Intro_Image.svg';

const Main = () => {
  return (
    <Layout>
      <Ecord_Title />
      <Ecord />
      <Intro_Image />
      <div>Main dd</div>
    </Layout>
  );
};

export default Main;
