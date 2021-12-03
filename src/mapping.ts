import { BigInt } from "@graphprotocol/graph-ts";
import {
  Market,
  // FeeTake,
  // LogBump,
  // LogBuyEnabled,
  // LogDelete,
  // LogInsert,
  // LogInt,
  // LogItemUpdate,
  LogKill,
  LogMake,
  // LogMatch,
  // LogMatchingEnabled,
  // LogMinSell,
  // LogNote,
  // LogSetAuthority,
  // LogSetOwner,
  // LogSortedOffer,
  LogTake,
  // LogTrade,
  // LogUnsortedOffer,
  // OfferDeleted
} from "../generated/Market/Market";

import {
  LogKill as LogKillEntity,
  LogMake as LogMakeEntity,
  LogTake as LogTakeEntity,
} from "../generated/schema";

// export function handleFeeTake(event: FeeTake): void {
//   // Entities can be loaded from the store using a string ID; this ID
//   // needs to be unique across all entities of the same type
//   let entity = ExampleEntity.load(event.transaction.from.toHex());

//   // Entities only exist after they have been saved to the store;
//   // `null` checks allow to create entities on demand
//   if (!entity) {
//     entity = new ExampleEntity(event.transaction.from.toHex());

//     // Entity fields can be set using simple assignments
//     entity.count = BigInt.fromI32(0);
//   }

//   // BigInt and BigDecimal math are supported
//   entity.count = entity.count + BigInt.fromI32(1);

//   // Entity fields can be set based on event parameters
//   entity.id = event.params.id;
//   entity.pair = event.params.pair;

//   // Entities can be written to the store with `.save()`
//   entity.save();

//   // Note: If a handler doesn't require existing field values, it is faster
//   // _not_ to load the entity from the store. Instead, create it fresh with
//   // `new Entity(...)`, set the fields that should be updated and save the
//   // entity back to the store. Fields that were not set or unset remain
//   // unchanged, allowing for partial updates to be applied.

//   // It is also possible to access smart contracts from mappings. For
//   // example, the contract that has emitted the event can be connected to
//   // with:
//   //
//   // let contract = Contract.bind(event.address)
//   //
//   // The following functions can then be called on this contract to access
//   // state variables and other data:
//   //
//   // - contract.AqueductAddress(...)
//   // - contract.AqueductDistributionLive(...)
//   // - contract._best(...)
//   // - contract._dust(...)
//   // - contract._head(...)
//   // - contract._near(...)
//   // - contract._rank(...)
//   // - contract._span(...)
//   // - contract.buy(...)
//   // - contract.buyAllAmount(...)
//   // - contract.buyEnabled(...)
//   // - contract.cancel(...)
//   // - contract.del_rank(...)
//   // - contract.dustId(...)
//   // - contract.getBestOffer(...)
//   // - contract.getBetterOffer(...)
//   // - contract.getBuyAmount(...)
//   // - contract.getFirstUnsortedOffer(...)
//   // - contract.getMinSell(...)
//   // - contract.getNextUnsortedOffer(...)
//   // - contract.getOffer(...)
//   // - contract.getOfferCount(...)
//   // - contract.getOwner(...)
//   // - contract.getPayAmount(...)
//   // - contract.getTime(...)
//   // - contract.getWorseOffer(...)
//   // - contract.initialized(...)
//   // - contract.insert(...)
//   // - contract.isActive(...)
//   // - contract.isClosed(...)
//   // - contract.isOfferSorted(...)
//   // - contract.last_offer_id(...)
//   // - contract.make(...)
//   // - contract.matchingEnabled(...)
//   // - contract.offer(...)
//   // - contract.offer(...)
//   // - contract.offer(...)
//   // - contract.offers(...)
//   // - contract.owner(...)
//   // - contract.sellAllAmount(...)
//   // - contract.setAqueductAddress(...)
//   // - contract.setAqueductDistributionLive(...)
//   // - contract.setBuyEnabled(...)
//   // - contract.setFeeBPS(...)
//   // - contract.setFeeTo(...)
//   // - contract.setMatchingEnabled(...)
//   // - contract.setMinSell(...)
//   // - contract.stopped(...)
// }

export function handleLogKill(event: LogKill): void {
  let ep = event.params,
    lkID = ep.id.toHexString(),
    // Create new LogKill entity
    logKill = new LogKillEntity(lkID);

  logKill.id = lkID;
  logKill.pair = ep.pair;
  logKill.maker = ep.maker;
  logKill.pay_gem = ep.pay_gem;
  logKill.buy_gem = ep.buy_gem;
  logKill.pay_amt = ep.pay_amt;
  logKill.buy_amt = ep.buy_amt;
  logKill.timestamp = ep.timestamp;
  logKill.transactionHash = ep._event.transaction.hash;

  logKill.save();
}

export function handleLogMake(event: LogMake): void {
  // For `LogMake` entity.
  let ep = event.params,
    lmID = ep.id.toHexString(),
    // Create new LogMake entity.
    logMake = new LogMakeEntity(lmID);

  logMake.id = lmID;
  logMake.pair = ep.pair;
  logMake.maker = ep.maker;
  logMake.pay_gem = ep.pay_gem;
  logMake.buy_gem = ep.buy_gem;
  logMake.pay_amt = ep.pay_amt;
  logMake.buy_amt = ep.buy_amt;
  logMake.timestamp = ep.timestamp;
  logMake.transactionHash = ep._event.transaction.hash;

  logMake.save();
}

export function handleLogTake(event: LogTake): void {
  let ep = event.params,
    ltID = ep.id.toHexString(),
    uuid = event.transaction.hash.toHexString(),
    // Create new LogTake entity
    logTake = new LogTakeEntity(uuid);

  logTake.id = uuid;
  logTake.order_id = ltID;
  logTake.pair = ep.pair;
  logTake.maker = ep.maker;
  logTake.taker = ep.taker;
  logTake.pay_gem = ep.pay_gem;
  logTake.buy_gem = ep.buy_gem;
  logTake.take_amt = ep.take_amt;
  logTake.give_amt = ep.give_amt;
  logTake.timestamp = ep.timestamp;
  logTake.transactionHash = ep._event.transaction.hash;

  logTake.save();
}
