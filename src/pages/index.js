import React from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonial"
import Trips from "../components/Trips"


export default function Home() {
  return <Layout> 
    <Hero/>
    <Trips heading="Our favourite Destination" />
    <Testimonials/>
    <Stats/>
    <Email/>
  </Layout>
}
