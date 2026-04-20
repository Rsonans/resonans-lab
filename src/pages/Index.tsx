import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ResonansCycleSection } from "@/components/home/ResonansCycleSection";
import { ResearchInterestsSection } from "@/components/home/ResearchInterestsSection";
import { ExploreSection } from "@/components/home/ExploreSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { PartnershipsSection } from "@/components/home/PartnershipsSection";

const Index = () => {
  return (
    <PageLayout headerVariant="dark">
      <HeroSection />
      <CapabilitiesSection />
      <ResonansCycleSection />
      {/* <ResearchInterestsSection /> */}
      <ExploreSection />
      {/* <CommunitySection /> */}
      <PartnershipsSection />
    </PageLayout>
  );
};

export default Index;
