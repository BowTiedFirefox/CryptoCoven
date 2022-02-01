import {
  Transfer as TransferEvent
} from "../generated/CryptoCoven/CryptoCoven"
import {
  Account,
  Token
} from "../generated/schema"
import {BigInt} from "@graphprotocol/graph-ts";



export function handleTransfer(event: TransferEvent): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    token = new Token(event.params.tokenId.toString());
  }
  token.owner = event.params.to.toHexString();
  token.covenIndex = event.params.tokenId;
  token.save();
  let accountTo = Account.load(event.params.to.toHexString());
  if (!accountTo) {
    accountTo = new Account(event.params.to.toHexString());
    accountTo.covenNumber = BigInt.fromI32(0);
  }
  accountTo.covenNumber = accountTo.covenNumber.plus(
      BigInt.fromI32(1)
  );
  accountTo.save();

  let accountFrom = Account.load(event.params.from.toHexString());
  if (!accountFrom) {
    accountFrom = new Account(event.params.from.toHexString());
    accountFrom.covenNumber = BigInt.fromI32(0);
  }
  accountFrom.covenNumber = accountFrom.covenNumber.minus(
      BigInt.fromI32(1)
  );
  accountFrom.save()
}
