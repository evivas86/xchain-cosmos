import { Address, Balance, BaseXChainClient, Fees, Tx, TxHash, TxHistoryParams, TxParams, TxsPage, XChainClient, XChainClientParams } from '@xchainjs/xchain-client';
import { Asset } from '@xchainjs/xchain-util';
import { CosmosSDKClient } from './cosmos/sdk-client';
import { TxOfflineParams } from './cosmos/types';
/**
 * Interface for custom Cosmos client
 */
export interface CosmosClient {
    getMainAsset(): Asset;
    getSDKClient(): CosmosSDKClient;
}
/**
 * Custom Cosmos client
 */
declare class Client extends BaseXChainClient implements CosmosClient, XChainClient {
    private sdkClients;
    /**
     * Constructor
     *
     * Client has to be initialised with network type and phrase.
     * It will throw an error if an invalid phrase has been passed.
     *
     * @param {XChainClientParams} params
     *
     * @throws {"Invalid phrase"} Thrown if the given phase is invalid.
     */
    constructor({ network, phrase, rootDerivationPaths, }: XChainClientParams);
    /**
     * Get the explorer url.
     *
     * @returns {string} The explorer url.
     */
    getExplorerUrl(): string;
    /**
     * Get the explorer url for the given address.
     *
     * @param {Address} address
     * @returns {string} The explorer url for the given address.
     */
    getExplorerAddressUrl(address: Address): string;
    /**
     * Get the explorer url for the given transaction id.
     *
     * @param {string} txID
     * @returns {string} The explorer url for the given transaction id.
     */
    getExplorerTxUrl(txID: string): string;
    /**
     * @private
     * Get private key.
     *
     * @returns {PrivKey} The private key generated from the given phrase
     *
     * @throws {"Phrase not set"}
     * Throws an error if phrase has not been set before
     * */
    private getPrivateKey;
    getSDKClient(): CosmosSDKClient;
    /**
     * Get the current address.
     *
     * @returns {Address} The current address.
     *
     * @throws {Error} Thrown if phrase has not been set before. A phrase is needed to create a wallet and to derive an address from it.
     */
    getAddress(index?: number): string;
    /**
     * Validate the given address.
     *
     * @param {Address} address
     * @returns {boolean} `true` or `false`
     */
    validateAddress(address: Address): boolean;
    /**
     * Get the main asset based on the network.
     *
     * @returns {string} The main asset based on the network.
     */
    getMainAsset(): Asset;
    /**
     * Get the balance of a given address.
     *
     * @param {Address} address By default, it will return the balance of the current wallet. (optional)
     * @param {Asset} asset If not set, it will return all assets available. (optional)
     * @returns {Balance[]} The balance of the address.
     */
    getBalance(address: Address, assets?: Asset[]): Promise<Balance[]>;
    /**
     * Get transaction history of a given address with pagination options.
     * By default it will return the transaction history of the current wallet.
     *
     * @param {TxHistoryParams} params The options to get transaction history. (optional)
     * @returns {TxsPage} The transaction history.
     */
    getTransactions(params?: TxHistoryParams): Promise<TxsPage>;
    /**
     * Get the transaction details of a given transaction id.
     *
     * @param {string} txId The transaction id.
     * @returns {Tx} The transaction details of the given transaction id.
     */
    getTransactionData(txId: string): Promise<Tx>;
    /**
     * Transfer balances.
     *
     * @param {TxParams} params The transfer options.
     * @returns {TxHash} The transaction hash.
     */
    transfer({ walletIndex, asset, amount, recipient, memo }: TxParams): Promise<TxHash>;
    /**
     * Transfer offline balances.
     *
     * @param {TxOfflineParams} params The transfer offline options.
     * @returns {string} The signed transaction bytes.
     */
    transferOffline({ walletIndex, asset, amount, recipient, memo, from_account_number, from_sequence, }: TxOfflineParams): Promise<string>;
    /**
     * Get the current fee.
     *
     * @returns {Fees} The current fee.
     */
    getFees(): Promise<Fees>;
}
export { Client };
