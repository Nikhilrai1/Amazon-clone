import Head from 'next/head'
import { useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Projects from '../components/projects'
import Services from '../components/Services'
import Skills from '../components/Skills'
import { client } from '../utils/client'
import { urlFor } from '../utils/client'



export default function Home({ profile, skill, service, project }) {
  const [dark,setdark] = useState(false)
  const { name, about, description, email, github, instagram, linkedin, twitter, profileImage, facebook, address, phone } = profile;
  const changeTheme = () => {
    setdark(!dark)
  }
  return (
    <div className="m-0 p-0 box-border">
      <Head>
        <title>{name}</title>
        <meta name="description" content={name} />
        <link rel="icon" href={profileImage} />
      </Head>
      <Navbar changeTheme={changeTheme} dark={dark}/>
      <div className={`mt-20 z-40 ${dark ? "bg-black text-gray-400" : ""}`}>
        <HeroSection name={name} profileImage={profileImage} description={description} />
        <About social={{ facebook, github, instagram, twitter }} about={about} />
        <Services services={service} />
        <Skills skills={skill} />
        <Projects projectData={project} />
        <Contact email={email} phone={phone} name={name} address={address} />
        <Footer social={{ facebook, github, instagram, twitter }} portFolioName={name} logo={urlFor(profileImage?.asset._ref).url()} copyright={name.split(" ").concat()} />
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  const profileQuery = `*[_type == "profile"] {
   name, profileImage, about, description, 
   email, github, instagram, linkedin, 
   facebook, twitter, address, phone 
 }`
  const projectQuery = `*[_type == "profile"] {
   project[]->{
   name,description,projectImage,reference,
   technology[]->{
   name,description,technologyImage
  }}}`
  const serviceQuery = `*[_type == "profile"]{
   service[]->{
   _id,
   name,
   description
 }}`
  const skillQuery = `*[_type == "profile"] {
   skill[]->{
   _id,name,progress,
   description,skillImage
  }}`
  const myProfile = await client.fetch(profileQuery);
  const myProject = await client.fetch(projectQuery);
  const myService = await client.fetch(serviceQuery);
  const mySkill = await client.fetch(skillQuery);
  return {
    props: {
      profile: myProfile[0],
      project: myProject[0].project,
      service: myService[0].service,
      skill: mySkill[0].skill,
    },
  };
}
