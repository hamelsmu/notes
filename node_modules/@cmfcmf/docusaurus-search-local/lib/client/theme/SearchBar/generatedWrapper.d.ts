declare const lunr: ((config: import("lunr").ConfigFunction) => import("lunr").Index) & {
    Index: {
        load: (index: object) => import("lunr").Index;
    };
} & {
    Query: {
        wildcard: {
            TRAILING: import("lunr").Query.wildcard.TRAILING;
        };
        presence: {
            PROHIBITED: import("lunr").Query.presence.PROHIBITED;
        };
    };
};
export declare const tokenize: (input: string) => string[];
export declare const mylunr: typeof lunr;
export {};
