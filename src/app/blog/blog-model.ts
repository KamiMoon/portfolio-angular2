export class Post {
    _id: String;
    title: String;
    description?: String;
    postHtml: String;
    photo?: String;
    user_id: String;
    user_name: String;
    headingQuote: String;
    keywords: PostKeyWord[];
}

export class PostKeyWord {
    text: String;

    constructor(text: String) { }
}

export class BlogSearchParams {
    page: Number;
    itemsPerPage: Number;
    totalItems: Number;

    constructor(page: Number, itemsPerPage: Number, totalItems: Number) { }
}

export class BlogQueryResult {
    posts: Post[];
    paging: BlogSearchParams;
}

export class Keyword {
    _id: String;
    total: Number;
}

export class BlogListItem {
    _id: String;
    title: String;
}
