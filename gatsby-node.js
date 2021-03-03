/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const newsLayout = path.resolve(`src/layouts/news-post.js`);
  const resultNews = await graphql(
    `
      query loadNewsPageQuery {
        allStrapiNewsBlogs {
          edges {
            node {
              Title
              id
            }
          }
        }
      }
    `
  );

  // Create blog post pages.
  resultNews.data.allStrapiNewsBlogs.edges.forEach((edge) => {
    const slugifyedTitle = slugify(edge.node.Title, {
      lower: true,
      strict: true,
    });

    createPage({
      // Path for this page — required
      path: `news-blog/${slugifyedTitle}`,
      component: newsLayout,
      context: { id: edge.node.id },
    });
  });

  const realizationLayout = path.resolve(`src/layouts/realization.js`);
  const resultRealisation = await graphql(
    `
      query loadRealizations {
        allStrapiRealizations {
          edges {
            node {
              Title
              id
            }
          }
        }
      }
    `
  );

  // Create blog post pages.
  resultRealisation.data.allStrapiRealizations.edges.forEach((edge) => {
    const slugifyedTitle = slugify(edge.node.Title, {
      lower: true,
      strict: true,
    });

    createPage({
      // Path for this page — required
      path: `realizacje/${slugifyedTitle}`,
      component: realizationLayout,
      context: { id: edge.node.id },
    });
  });
};
