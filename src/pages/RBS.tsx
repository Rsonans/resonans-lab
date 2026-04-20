import { PageLayout } from "@/components/layout/PageLayout";
import { RBSHeroSection } from "@/components/rbs/RBSHeroSection";
import { RBSBridgingGapSection } from "@/components/rbs/RBSBridgingGapSection";
import { RBSWhatWeDoSection } from "@/components/rbs/RBSWhatWeDoSection";
import { RBSProgressSection } from "@/components/rbs/RBSProgressSection";
import { RBSTeamSection } from "@/components/rbs/RBSTeamSection";
import { RBSCTASection } from "@/components/rbs/RBSCTASection";

const RBS = () => {
    return (
        <PageLayout headerVariant="light">
            <RBSHeroSection />
            <RBSBridgingGapSection />
            <RBSWhatWeDoSection />
            <RBSProgressSection />
            <RBSProgressSection />
            <RBSTeamSection />
            <RBSCTASection />
        </PageLayout>
    );
};

export default RBS;
