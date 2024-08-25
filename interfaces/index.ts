export interface FeedItem {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: {
    url?: string
    length?: number
    type?: string
  }
  categories: string[]
}

export interface Feed {
  url: string
  title: string
  link: string
  author: string
  description: string
  image: string
}

export interface RSSResponse {
  status: string
  feed: Feed
  items: FeedItem[]
}
export interface Article {
  title: string
  thumbnail: string
  url: string
  date: string
  description: string
  categories: string[]
}

export type ArticleList = Article[]

export interface GitRepo {
  id: number
  name: string
  full_name: string
  private: boolean
  owner: {
    login: string
    id: number
    avatar_url: string
    url: string
    html_url: string
    type: string
    site_admin: boolean
  }
  html_url: string
  description: string
  fork: boolean
  url: string
  stargazers_count: number
  watchers_count: number
  language: string
  forks_count: number
  open_issues_count: number
  default_branch: string
}

// const articles: {
//   title: string;
//   thumbnail: string;
//   url: string;
//   date: string;
//   description: string;
//   categories: string[];
// }[]

type FeedItemSummary = Pick<
  FeedItem,
  'title' | 'thumbnail' | 'description' | 'categories'
>

export interface MediumArticle extends FeedItemSummary {
  url: string
  date: string
}
