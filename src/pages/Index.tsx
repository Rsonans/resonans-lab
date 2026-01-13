import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { ResearchInterestsSection } from "@/components/home/ResearchInterestsSection";
import { FlagshipProjectSection } from "@/components/home/FlagshipProjectSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { PartnershipsSection } from "@/components/home/PartnershipsSection";

const Index = () => {
  return (
    <PageLayout headerVariant="dark">
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <ResearchInterestsSection />
      <FlagshipProjectSection />
      <CommunitySection />
      <PartnershipsSection />
    </PageLayout>
  );
};

export default Index;
