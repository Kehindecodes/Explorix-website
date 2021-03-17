import React from 'react'
import Layout2 from "../components/Layout2"
import Testimonials from "../components/Testimonial"
import Trips from "../components/Trips"

const about = () => {
    return (
        <Layout2>
            <Testimonials/>
            <Trips heading="Our favourite Destination" />
        </Layout2>
    )
}

export default about
