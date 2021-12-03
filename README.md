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
yarn deploy-mainnet
# or
yarn deploy-kovan
```

Note that for each deploy, you need to comment/uncomment specific network data on `subgraph.yaml`:

```yaml
# network: optimism-kovan
network: optimism
source:
  # address: "0x5ddDa7DF721272106af1904abcc64E76AB2019d2" # kovan
  address: "0x7a512d3609211e719737E82c7bb7271eC05Da70d" # mainnet
```

## Editing `schema.graphql`

When editing entities the `schema.graphql` file, always make sure to regenerate the static typings for them by running:

```
yarn codegen
```

This will automatically generate the static types for you.
