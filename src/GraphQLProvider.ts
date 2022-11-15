import { gql as gqlBase, createGraphQLClient } from '@solid-primitives/graphql';

export const query = createGraphQLClient(import.meta.env.VITE_GQL_URL);

export const gql = gqlBase;
