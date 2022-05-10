import { proto } from '@cosmos-client/core';
import { TxParams } from '@xchainjs/xchain-client';
export declare type CosmosSDKClientParams = {
    server: string;
    chainId: string;
    prefix?: string;
};
export declare type SearchTxParams = {
    messageAction?: string;
    messageSender?: string;
    transferSender?: string;
    transferRecipient?: string;
    page?: number;
    limit?: number;
    txMinHeight?: number;
    txMaxHeight?: number;
};
export declare type UnsignedTxParams = {
    from: string;
    to: string;
    amount: string;
    asset: string;
    memo?: string;
};
export declare type TransferParams = {
    privkey: proto.cosmos.crypto.secp256k1.PrivKey;
    from: string;
    to: string;
    amount: string;
    asset: string;
    memo?: string;
    fee?: proto.cosmos.tx.v1beta1.Fee;
};
export declare type TransferOfflineParams = TransferParams & {
    from_account_number: string;
    from_sequence: string;
};
export declare type TxOfflineParams = TxParams & {
    from_account_number: string;
    from_sequence: string;
};
export declare type BaseAccountResponse = {
    type?: string;
    value?: proto.cosmos.auth.v1beta1.BaseAccount;
};
export declare type RawTxResponse = {
    body: {
        messages: proto.cosmos.bank.v1beta1.MsgSend[];
    };
};
export declare type TxEventAttribute = {
    key: string;
    value: string;
};
export declare type TxEvent = {
    type: string;
    attributes: TxEventAttribute[];
};
export declare type TxLog = {
    msg_index: number;
    log: string;
    events: TxEvent[];
};
export declare type GetTxByHashResponse = {
    tx_response: TxResponse;
};
export declare type TxResponse = {
    height?: number;
    txhash?: string;
    data: string;
    raw_log?: string;
    logs?: TxLog[];
    gas_wanted?: string;
    gas_used?: string;
    tx?: RawTxResponse;
    timestamp: string;
};
export declare type TxHistoryResponse = {
    page_number?: number;
    page_total?: number;
    limit?: number;
    pagination?: {
        total: string;
    };
    tx_responses?: TxResponse[];
};
export declare type APIQueryParam = {
    [x: string]: string;
};
export declare type RPCTxResult = {
    hash: string;
    height: string;
    index: number;
    tx_result: {
        code: number;
        data: string;
        log: string;
        info: string;
        gas_wanted: string;
        gas_used: string;
        events: TxEvent[];
        codespace: string;
    };
    tx: string;
};
export declare type RPCTxSearchResult = {
    txs: RPCTxResult[];
    total_count: string;
};
export declare type RPCResponse<T> = {
    jsonrpc: string;
    id: number;
    result: T;
};
