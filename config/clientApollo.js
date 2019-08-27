import ApolloClient from 'apollo-boost';
require('dotenv').config();

const client = new ApolloClient({
	uri: process.env.GATSBY_POSTGRES_HOST
});
