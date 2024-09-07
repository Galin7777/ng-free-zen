export type ContentData = {
  type: string;
  data: string;
};

export type LinkData = {
  url: string;
  content: ContentData;
};

export type CategoryData = {
  name: string;
  links: LinkData[];
};
