import React from 'react';
import {graphql} from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Row, Container } from "react-bootstrap";

const BlogpostLayout = ({data}) => {
  const post=data.wordpressPost;
  return(
    <>
        <Header/>
        <Container>
          <Row className="justify-content-md-center">
              <h1 dangerouslySetInnerHTML={{__html:post.title}}/>
              <div dangerouslySetInnerHTML={{__html:post.content}}/>
          </Row>

        </Container>

        <Footer/>
    </>
  )
}
 
export default BlogpostLayout;

export const query=graphql`
query($slug:String!){
  wordpressPost(slug:{eq:$slug}){
      content
      title
    }
}
`