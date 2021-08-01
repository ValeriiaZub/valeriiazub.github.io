/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// const { graphql, Reporter } = require("gatsby");

// exports.onCreateNode = ({ node, getNode, actions }) => {
//     if (node.internal.type === `MarkdownRemark`) {
//         const slug = createFilePath({ node, getNode, basePath: `` })
//         createNodeField({
//             node,
//             name: `slug`,
//             value: slug
//         })
//     }
// }

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
      {
        allMdx {
          nodes {
            id
            frontmatter {
              path
            }
          }
        }
      }
    `);

  if (result.errors) {
    reporter.panic('failed to create posts ', result.errors)
  }

  const pages = await result.data.allMdx.nodes

  pages.forEach(page => {
    console.log(JSON.stringify(page));
    createPage({
      path: `/${page.frontmatter.path}`,
      component: require.resolve(`./src/templates/post.js`),
      context: {
        id: page.id,
        company: page.frontmatter.path
      }
    })
  })
}