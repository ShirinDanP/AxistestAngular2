export interface MovieData {
    constructor(){}
    status: string;
    copyright: string;
    has_more: boolean;
    num_results: number;
    results: Object[];
}

export interface ResultsData {
    display_title: string;
    mpaa_rating: any;
    critics_pick: number;
    byline: string;
    headline: string;
    summary_short: string;
    publication_date: number;
    opening_date: number;
    date_updated: number;
    link: LinkData;
    multimedia: MultiMediaData;
}

export interface LinkData {
    type: string;
    url: string;
    suggested_link_text: string;
}

export interface MultiMediaData {
    type: string;
    src: string;
    width: number;
    height: number;
}
