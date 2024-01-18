export interface Article {
    id: number;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    featured: boolean;
    launches: [];
    events: [];
}

export interface Articles {
    count: number;
    next: string;
    previous: null;
    results: Article[];
}
