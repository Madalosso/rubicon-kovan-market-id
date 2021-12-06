# Rubicon Subgraph (Optimism Mainnet and Optimism Kovan)

(Legacy) Subgraph for Rubicon Finance's `RubiconMarket` contract _on Optimism Mainnet_.

Subgraph for Rubicon Finance's `RubiconMarket` contract on The Graph's [Legacy Explorer](https://thegraph.com/legacy-explorer).

> See [The Graph's documentation](https://thegraph.com/docs/developer/create-subgraph-hosted)) on how what the difference is between a subgraph on a Legacy Explorer and a subgraph on [Subgraph Studio](https://thegraph.com/studio).

## Using the access token to deploy the subgraph

When you create a subgraph on the Legacy Explorer, you must use the access token provided by on your dashboard.

For the Rubicon Subgraph, you must use @madalosso's access token since the subgraph was created on his account.

The first step get the access token and store it on your computer with the following command:

```
graph auth --product hosted-service <ACCESS_TOKEN>
```

You only need to do this once.

After that, you should be able to deploy the subgraph:

```
yarn deploy:op-main
# or
yarn deploy:op-kovan
```

Note that we are using the template system mustache to fill the placholders on `subgraph.template.yaml` and generate a `subgraph.yaml` file so we can parametrize configurations and deploy to multiple networks using the same proejct. (https://thegraph.com/docs/hostedservice/deploy-subgraph-hosted#deploying-the-subgraph-to-multiple-ethereum-networks) (thanks for the tip @platocrat)

## Editing `schema.graphql`

When editing entities the `schema.graphql` file, always make sure to regenerate the static typings for them by running:

```
yarn codegen
```

This will automatically generate the static types for you.
