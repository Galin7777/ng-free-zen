import type { TitleData } from '../../ui/Title/types';
import type { ImageData } from '../../ui/Image/types';
import type { LinkData } from '../../ui/Links/types';

export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  image: ImageData;
};
