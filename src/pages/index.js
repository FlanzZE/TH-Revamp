import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Hero from '../components/hero';

class RootIndex extends React.Component {
	render() {
		// const siteTitle = get(this, 'props.data.site.siteMetadata.title');
		// const posts = get(this, 'props.data.allContentfulBlogPost.edges');
		// const [author] = get(this, 'props.data.allContentfulPerson.edges');
		const homeObject = get(this, 'props.data.allContentfulHome.edges[0].node');
		const { title, heroBanner } = homeObject;
		return (
			<div style={{ background: '#fff' }}>
				<Helmet title={title}>
					<meta charset="UTF-8" />
					<meta name="description" content="Free Web tutorials" />
					<meta name="keywords" content="HTML,CSS,XML,JavaScript" />
					<meta name="author" content="John Doe" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<html lang="es" />
				</Helmet>
				<Hero title={title} data={heroBanner} />
				<div>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
					reprehenderit placeat qui, aliquam architecto iusto, dolores atque
					illum magnam cum voluptatem eveniet provident minima, dolorem nisi est
					ut! Quos, voluptatem?22
				</div>
			</div>
		);
	}
}

export default RootIndex;

export const pageQuery = graphql`
	query HomeQuery {
		allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
			edges {
				node {
					title
					slug
					publishDate(formatString: "MMMM Do, YYYY")
					tags
					heroImage {
						sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
							...GatsbyContentfulSizes_withWebp
						}
					}
					description {
						childMarkdownRemark {
							html
						}
					}
				}
			}
		}
		allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
			edges {
				node {
					name
					shortBio {
						shortBio
					}
					title
					heroImage: image {
						sizes(
							maxWidth: 1180
							maxHeight: 480
							resizingBehavior: PAD
							background: "rgb:000000"
						) {
							...GatsbyContentfulSizes_withWebp
						}
					}
				}
			}
		}
		allContentfulHome(sort: { fields: [title], order: ASC }) {
			edges {
				node {
					title
					heroBanner {
						title
						file {
							url
							fileName
							details {
								size
								image {
									width
									height
								}
							}
						}
					}
				}
			}
		}
	}
`;
