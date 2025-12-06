export type Podcast = {
  title: string;
  links: Link[];
  description: string;
  image: string;
}

export type Network = {
  name: string;
  link: string;
  image: string;
}

export type LinkType = 'website' | 'apple' | 'spotify' | 'youtube';

export type Link = {
  link: string;
  type: LinkType;
}

export type Award = {
  name: string;
  p1: Podcast;
  p2?: Podcast;
  p3?: Podcast;
  sponsor?: string;
}

export type NetworkAward = {
  name: string;
  p1: Network;
  p2: Network;
  p3: Network;
}

export type AwardsYear = {
  year: number;
  podcastOfTheYear: Award;
  bestPodcasts: Award[];
  specialAwards: Award[];
  favourites: Award[];
  networkAward: NetworkAward;
}
