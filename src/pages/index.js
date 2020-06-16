import React from "react"
import PrimaryLayout from '../layout/PrimaryLayout';
import {graphql} from 'gatsby';
import Post from '../components/Post';
import {Helmet} from 'react-helmet';

const IndexPage = ({data}) => {
  return (
    <PrimaryLayout>
    <Helmet>
    <title>Gatsby Blog</title>
    <meta name="description" content="This is a blog created with Gatsby and Wordpress"></meta>
    <meta name="keywords" content="gatsby,gatsbyjs project, gatsby blog"></meta>
    <meta name="robots" content="index,follow"></meta>
    </Helmet>
      {data.allWordpressPost.nodes.map((node,index)=>(
      <Post 
      key={index}
      image={node.featured_media.source_url}
      title={node.title} 
      excerpt={node.excerpt}
      readMore={node.slug}
      />
      ))}


  </PrimaryLayout>
  )
}

export default IndexPage

export const query=graphql`
{
  allWordpressPost{
    nodes{
      slug
      title
      excerpt
      featured_media{
        source_url
      }
    }
  }
}

`