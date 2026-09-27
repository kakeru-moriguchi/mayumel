import Hero from '@/components/home/Hero';
import Intro from '@/components/home/Intro';
import ProfileSection from '@/components/home/ProfileSection';
import ServiceSection from '@/components/home/ServiceSection';
import WorksSection from '@/components/home/WorksSection';
import AccessSection from '@/components/home/AccessSection';
import Approach from '@/components/sections/Approach';
import Instagram from '@/components/sections/Instagram';
import ContactCta from '@/components/sections/ContactCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ProfileSection />
      <ServiceSection />
      <WorksSection />
      <Approach no="05" />
      <Instagram no="06" />
      <AccessSection />
      <ContactCta no="08" />
    </>
  );
}
