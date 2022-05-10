import { cosmosclient, proto } from '@cosmos-client/core';
import { TxHash } from '@xchainjs/xchain-client';
import { CosmosSDKClientParams, RPCTxSearchResult, SearchTxParams, TransferOfflineParams, TransferParams, TxHistoryResponse, TxResponse, UnsignedTxParams } from './types';
export declare class CosmosSDKClient {
    sdk: cosmosclient.CosmosSDK;
    server: string;
    chainId: string;
    prefix: string;
    constructor({ server, chainId, prefix }: CosmosSDKClientParams);
    updatePrefix(prefix: string): void;
    setPrefix(): void;
    getAddressFromPrivKey(privkey: proto.cosmos.crypto.secp256k1.PrivKey): string;
    getAddressFromMnemonic(mnemonic: string, derivationPath: string): string;
    getPrivKeyFromMnemonic(mnemonic: string, derivationPath: string): proto.cosmos.crypto.secp256k1.PrivKey;
    checkAddress(address: string): boolean;
    getUnsignedTxBody({ from, to, amount, asset, memo }: UnsignedTxParams): proto.cosmos.tx.v1beta1.TxBody;
    getBalance(address: string): Promise<proto.cosmos.base.v1beta1.Coin[]>;
    getAccount(address: cosmosclient.AccAddress): Promise<proto.cosmos.auth.v1beta1.IBaseAccount>;
    searchTx({ messageAction, messageSender, page, limit }: SearchTxParams): Promise<TxHistoryResponse>;
    searchTxFromRPC({ messageAction, messageSender, transferSender, transferRecipient, page, limit, txMinHeight, txMaxHeight, rpcEndpoint, }: SearchTxParams & {
        rpcEndpoint: string;
    }): Promise<RPCTxSearchResult>;
    txsHashGet(hash: string): Promise<TxResponse>;
    transfer({ privkey, from, to, amount, asset, memo, fee }: TransferParams): Promise<TxHash>;
    transferSignedOffline({ privkey, from, from_account_number, from_sequence, to, amount, asset, memo, fee, }: TransferOfflineParams): Promise<string>;
    signAndBroadcast(txBuilder: cosmosclient.TxBuilder, privKey: proto.cosmos.crypto.secp256k1.PrivKey, signerAccount: proto.cosmos.auth.v1beta1.IBaseAccount): Promise<string>;
}
