import { proto } from '@cosmos-client/core';
import { Fees, Tx } from '@xchainjs/xchain-client';
import { Asset } from '@xchainjs/xchain-util';
import { APIQueryParam, TxResponse } from './cosmos/types';
/**
 * The decimal for cosmos chain.
 */
export declare const DECIMAL = 6;
/**
 * Type guard for MsgSend
 *
 * @param {Msg} msg
 * @returns {boolean} `true` or `false`.
 */
export declare const isMsgSend: (msg: unknown) => msg is proto.cosmos.bank.v1beta1.MsgSend;
/**
 * Type guard for MsgMultiSend
 *
 * @param {Msg} msg
 * @returns {boolean} `true` or `false`.
 */
export declare const isMsgMultiSend: (msg: unknown) => msg is proto.cosmos.bank.v1beta1.MsgMultiSend;
/**
 * Get denomination from Asset
 *
 * @param {Asset} asset
 * @returns {string} The denomination of the given asset.
 */
export declare const getDenom: (asset: Asset) => string;
/**
 * Get Asset from denomination
 *
 * @param {string} denom
 * @returns {Asset|null} The asset of the given denomination.
 */
export declare const getAsset: (denom: string) => Asset | null;
/**
 * Parse transaction type
 *
 * @param {TxResponse[]} txs The transaction response from the node.
 * @param {Asset} mainAsset Current main asset which depends on the network.
 * @returns {Tx[]} The parsed transaction result.
 */
export declare const getTxsFromHistory: (txs: TxResponse[], mainAsset: Asset) => Tx[];
/**
 * Get Query String
 *
 * @param {APIQueryParam}
 * @returns {string} The query string.
 */
export declare const getQueryString: (params: APIQueryParam) => string;
/**
 * Get the default fee.
 *
 * @returns {Fees} The default fee.
 */
export declare const getDefaultFees: () => Fees;
/**
 * Get address prefix based on the network.
 *
 * @returns {string} The address prefix based on the network.
 *
 **/
export declare const getPrefix: () => string;
