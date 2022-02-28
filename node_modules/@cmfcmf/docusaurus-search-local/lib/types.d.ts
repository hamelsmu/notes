export declare type DSLAPluginData = {
    indexDocSidebarParentCategories: number;
    titleBoost: number;
    contentBoost: number;
    parentCategoriesBoost: number;
};
export declare type MyDocument = {
    id: number;
    pageTitle: string;
    sectionTitle: string;
    sectionRoute: string;
    type: "docs" | "blog" | "page";
};
