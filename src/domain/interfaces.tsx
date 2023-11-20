export interface BaseSearchResponse<T> {
    info: Info;
    results: T[];
  }
  export interface Info {
    count: number;
    pages: number;
    next?: string
    prev?: string
  }
export interface Tools {
    app_id: string;
    name:   string;
    color:  string;
    icon:   string;
    link:   string;
}