import IntroBackground from '@/components/intro/IntroBackground'
import IntroBody from '@/components/intro/IntroBody'
import AboutBody from '@/components/about/AboutBody'
import ExperienceBody from '@/components/experience/ExperienceBody'
import PersonalBody from '@/components/personal/PersonalBody'
import SocialBody from '@/components/social/SocialBody'

export default function Home() {
  return (
    <>
        <IntroBackground />
        <IntroBody />
        <AboutBody />
        <ExperienceBody />
        <PersonalBody />
        <SocialBody />
    </>
  );
}
