import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'
import LandingPageLayout from '../components/layouts/landing-page'
// import MintBlock from '../components/MintBlock'
import MainSection from "../components/Section/Main";
// import StrategicPartnerSection from "../components/Section/StrategicPartner";
import CTASection from "../components/Section/CTASection";
import MultipleTokenSupportSection from "../components/Section/MultipleTokenSupport";
import DescSection from "../components/Section/Desc";
import ContactUsSection from "../components/Section/ContactUs";
import { getSession } from 'next-auth/react';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="pr-0 pl-0 bg-cover w-[100%] relative">
        <MainSection></MainSection>
        <MultipleTokenSupportSection></MultipleTokenSupportSection>
        <DescSection></DescSection>
        <CTASection></CTASection>
        {/* <StrategicPartnerSection></StrategicPartnerSection> */}
        <ContactUsSection></ContactUsSection>
      </div>
      {/* <MintBlock /> */}
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <LandingPageLayout>
      {page}
    </LandingPageLayout>
  )
}