import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	// link: new HttpLink({
	// 	uri: `https://api-us-east-1.hygraph.com/v2/cl9eiubwb06uv01umdzvrbc38/master`,
	// 	headers: {
	// 		authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN}`,
	// 	},
	// }),
	uri: "https://api-us-east-1.hygraph.com/v2/cl9eiubwb06uv01umdzvrbc38/master",
});

export default client;
