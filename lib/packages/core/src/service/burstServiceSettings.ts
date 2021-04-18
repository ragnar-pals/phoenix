/**
 * Copyright (c) 2019 Burst Apps Team
 */
import {Http} from '@burstjs/http';
import {AxiosRequestConfig} from 'axios';

/**
 * The settings interface for the BurstService class
 * @module core
 */
export interface BurstServiceSettings {
    /**
     * The node/peer host url with protocol and port, e.g. https://testnet.burst.fun:443
     */
    readonly nodeHost: string;

    /**
     * A list of node/peer hosts that can be chosen of, usually a list of reliable nodes. This is necessary for the automatic
     * node selection.
     */
    readonly reliableNodeHosts?: string[];

    /**
     * The relative path the Burst API endpoint, default is '/burst' - must begin with slash.
     * Usually, you don't use this.
     */
    readonly apiRootUrl?: string;

    /**
     * The options passed to httpClient
     * The default implementation uses axios. In case of a custom client pass your own options.
     * see [Axios Configuration](https://github.com/axios/axios#request-config)
     */
    readonly httpClientOptions?: any | AxiosRequestConfig;

    /**
     * If passed an client instance, it will be used instead of default HttpImpl.
     * Good for testing, but usually you won't need this
     */
    readonly httpClient?: Http;

}
