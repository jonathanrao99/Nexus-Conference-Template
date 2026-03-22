import HeroNextConfo from "@/components/forumx/HeroNextConfo";
import AboutSection from "@/components/forumx/AboutSection";
import MeetOurSpeakers from "@/components/forumx/MeetOurSpeakers";
import WhatToExpect from "@/components/forumx/WhatToExpect";
import ConferenceSessionsImage from "@/components/forumx/ConferenceSessionsImage";
import FeaturedSessions from "@/components/forumx/FeaturedSessions";
import TicketsNextConfo from "@/components/forumx/TicketsNextConfo";
import MeetOurPartners from "@/components/forumx/MeetOurPartners";
import FAQNextConfo from "@/components/forumx/FAQNextConfo";
import ReadyToJoinCTA from "@/components/forumx/ReadyToJoinCTA";
import ImagesMarquee from "@/components/forumx/ImagesMarquee";
import { EventJsonLd } from "@/components/seo/EventJsonLd";

export default function Home() {
  return (
    <>
      <EventJsonLd />
      <HeroNextConfo />
      <AboutSection />
      <MeetOurSpeakers />
      <WhatToExpect />
      <ConferenceSessionsImage />
      <FeaturedSessions />
      <TicketsNextConfo />
      <MeetOurPartners />
      <FAQNextConfo />
      <ReadyToJoinCTA />
      <ImagesMarquee />
    </>
  );
}
