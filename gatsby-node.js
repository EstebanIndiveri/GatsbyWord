// const {createFilePath} = require('gatsby-source-filesystem');
// const path=require('path');
// const BlogpostLayout = require.resolve(`./src/layout/BlogpostLayout.js`)

// exports.onCreateNode = ({ node,getNode,actions }) => {
//     const{createNodeField}=actions;
//     if(node.internal.type==='MarkdownRemark'){
//         const slug=createFilePath({node,getNode,basePath:'post'});
//         createNodeField({
//             node,
//             name:"slug",
//             value:slug
//         })
//     }
//   }
//   exports.createPages=({graphql,actions})=>{
//       const{createPage}=actions;
//     return graphql(`
//     {
//         allMarkdownRemark {  
//             nodes{
//               fields{
//                 slug
//               }
//             }
          
//         }
//       }
    
//     `).then(result=>{
//         result.data.allMarkdownRemark.nodes.forEach(node=>{
//             // console.log(node.fields.slug);
//             createPage({
//                 path:node.fields.slug,
//                 components:BlogpostLayout
//             })
//         })
//     })
//   }

// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
  {
    allWordpressPost{
      nodes{
        slug
      }
    }
  }
  `).then(result => {
    result.data.allWordpressPost.nodes.forEach((node)=>{
        createPage({
            path: `${node.slug}`,
            component: path.resolve('./src/layout/BlogpostLayout.js'),
            context:{
              slug:node.slug
            }
        })
    })
  })
}