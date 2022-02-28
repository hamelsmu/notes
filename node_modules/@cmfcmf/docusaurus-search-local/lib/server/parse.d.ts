export declare function html2text(html: string, type: "docs" | "blog" | "page", url?: string): {
    pageTitle: string;
    sections: {
        title: string;
        hash: string;
        content: string;
    }[];
    docSidebarParentCategories: string[] | undefined;
} | {
    pageTitle: string;
    sections: {
        title: string;
        hash: string;
        content: string;
    }[];
    docSidebarParentCategories?: undefined;
};
export declare function getDocusaurusTag(html: string): string;
