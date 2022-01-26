import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/CryptoCoven/CryptoCoven"
import {
  Account,
  Token
} from "../generated/schema"



export function handleTransfer(event: TransferEvent): void {
  // let entity = new Transfer(
  //   event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  // )
  // entity.from = event.params.from
  // entity.to = event.params.to
  // entity.tokenId = event.params.tokenId
  // entity.save()
}
