import axios, {AxiosInstance} from 'axios';

export class ApiClient {
    private static instance: AxiosInstance;

    public static getInstance = (): AxiosInstance => {
        if (!ApiClient.instance) {
            ApiClient.createInstance();
        }

        return ApiClient.instance;
    }

    private static createInstance = () => {
        let client = axios.create({
            baseURL: '/',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            timeout: 10000
        });

        ApiClient.instance = client;
    }
}