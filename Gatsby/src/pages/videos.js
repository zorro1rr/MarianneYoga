import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function videos({ data }) {
  const videos = data.sanityVideos
  return (
    <Layout>
      <Helmet>
        <title>Videos | Yoga With Marianne</title>
      </Helmet>
      <h2>videos page</h2>
      {/* need to sanitize this */}
      <div dangerouslySetInnerHTML={{ __html: videos.href }} />
      `youtube: https://www.youtube.com/watch?v=2Xc9gXyf2G4`
    </Layout>
  )
}
export const query = graphql`
  query VideoQuery {
    sanityVideos {
      description
      id
      name
      href
    }
  }
`
