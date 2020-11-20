import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function videos({ data }) {
  const videos = data.sanityVideos
  console.log(videos.href)
  return (
    <Layout>
      <h2>videos page</h2>
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
