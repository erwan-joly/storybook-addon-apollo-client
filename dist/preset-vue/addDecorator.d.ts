/// <reference types="react" />
export declare const decorators: (() => {
    template: string;
    data?: undefined;
    components?: undefined;
} | {
    data: () => {
        providerProps: {
            [x: string]: any;
            mocks?: readonly import("../types").MockedResponse[] | undefined;
            children?: import("react").ReactNode;
        };
    };
    components: {
        MockedProvider: import("../types").MockedProvider;
    };
    template: string;
})[];
