import type { LoadContext, OptionValidationContext, Plugin } from "@docusaurus/types";
declare type MyOptions = {
    indexDocs: boolean;
    indexDocSidebarParentCategories: number;
    indexBlog: boolean;
    indexPages: boolean;
    language: string | string[];
    style?: "none";
    lunr: {
        tokenizerSeparator?: string;
        k1: number;
        b: number;
        titleBoost: number;
        contentBoost: number;
        parentCategoriesBoost: number;
    };
};
export default function cmfcmfDocusaurusSearchLocal(context: LoadContext, options: MyOptions): Plugin<unknown>;
export declare function validateOptions({ options, validate, }: OptionValidationContext<MyOptions>): MyOptions;
export {};
