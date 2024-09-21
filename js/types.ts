// Common types

export type TitleData = {
  content: string;
  priority: number;
};

export type LinkData = {
  name: string;
  url: string;
};

export type ImageData = {
  source: string;
  description: string;
};

// HeaderData types

export type LangData = {
  name: string;
  key: string;
};

export type NavItemData = {
  name: string;
  key: string;
};

export type SelectItemData = {
  name: string;
  key: string;
};

export type HeaderData = {
  langs: LangData[];
  navigation: NavItemData[];
};

// DownloadData types

export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  image: ImageData;
};

// WarrantyData types

export type WarrantyData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};

// CareData types

export type CareData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};

// CashbackData types

export type CashbackData = {
  title: TitleData;
  texts: string[];
  buttonText: string;
};

// ClientsData types

export type LogoData = {
  lightSource: string;
  darkSource: string;
};

export type BrandFromAPI = {
  name: string;
  logo: LogoData;
};


export type ClientsData = {
  brands: BrandFromAPI[];
};


// FooterData types

export type ContentData = {
  type: string;
  data: string;
};

export type ColumnLinkData = {
  url: string;
  content: ContentData;
};

export type CategoryData = {
  name: string;
  links: ColumnLinkData[];
};

export type FooterData = {
  categories: CategoryData[];
  texts : string[];
  developer: ColumnLinkData;
};


export type AppData = {
  primaryInfo: HeaderData;
  download: DownloadData;
  warranty: WarrantyData;
  care: CareData;
  cashback: CashbackData;
  clients: ClientsData
  secondaryInfo: FooterData;
  }
