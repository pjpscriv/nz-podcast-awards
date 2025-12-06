/* 
  Sources:
    - https://stoppress.co.nz/news/new-zealand-podcast-awards-2025-winners-announced/
    - https://podnews.net/press-release/new-zealand-podcast-awards-2025
    - https://www.instagram.com/nzpodcastawards/
    - https://www.nzpodcastawards.com/pressrelease2023
    - One million Google searches
*/

import { TheSpinoff, FrankPodcasts, BHN } from './network-data';
import {
  KellyTarltonsFinalTreasureHunt,
  FuryoftheSmall,
  TheCurvePodcast,
  TheDomHarveyPodcast,
  Interconnector,
  WhatMattersMost,
  WhentheFactsChange,
  TheMeldingMusePodcast,
  ParentsWeveMet,
  AccidentalBusinessOwners,
  FreshMoni,
  HumanInTheLoop,
  CantHandleTheCrimeAndScandal,
  DidTitanicSink,
  WellingtonParanormal,
  TheDetail,
  LockedOutwithCraigRenney,
  TheFrontlinewithDrGaryPayinda,
  SatanicPanic,
  GUILT,
  Untidy,
  UnfilteredwithDaveLetele,
  ExtremelyCasualGamers,
  HeavensHelpline,
  AmongTheMissing,
  Alpha8,
  WhyDoYouParentLikeThat,
  TakeItFromUswithKentJohns,
  GreyAreaswithPetraBagust,
  GoodShift,
  BetweenTwoBeers,
  Āio,
  TheMorningRumble,
  YarnswithAndy,
  WitiUnderwater,
  WhatALad,
  FullCredit,
  TheFlood,
  PeoplePlanetFoodScigest,
  TuneintoNaturewithKarthic,
  TheBoyintheWater,
  BHNBigHairyNews,
  TheHappySaver,
  PaulTheOtherOnePodcast,
  TheArtfulDodger,
  ThatsJustCriminal,
} from './show-data';
import type { AwardsYear } from './types';


export const podcastAwards2025: AwardsYear = {
  year: 2025,
  podcastOfTheYear: {
    name: "Podcast of the Year",
    p1: KellyTarltonsFinalTreasureHunt,
    p2: FuryoftheSmall,
    p3: TheCurvePodcast,
    sponsor: "Acast"
  },
  bestPodcasts: [
    {
      name: "Best Arts and Culture Podcast",
      p1: TheDomHarveyPodcast,
      p2: Interconnector,
      p3: WhatMattersMost
    },
    {
      name: "Best Branded Podcast",
      p1: WhentheFactsChange,
      p2: TheMeldingMusePodcast,
      p3: ParentsWeveMet,
      sponsor: "PodLab"
    },
    {
      name: "Best Business Podcast",
      p1: AccidentalBusinessOwners,
      p2: FreshMoni,
      p3: HumanInTheLoop,
      sponsor: "PodLab"
    },
    {
      name: "Best Comedy Podcast",
      p1: CantHandleTheCrimeAndScandal,
      p2: DidTitanicSink,
      p3: WellingtonParanormal
    },
    {
      name: "Best Current Affairs Podcast",
      p1: TheDetail,
      p2: LockedOutwithCraigRenney,
      p3: TheFrontlinewithDrGaryPayinda
    },
    {
      name: "Best Documentary Podcast",
      p1: KellyTarltonsFinalTreasureHunt,
      p2: SatanicPanic,
      p3: GUILT
    },
    {
      name: "Best Education Podcast",
      p1: TheCurvePodcast,
      p2: Untidy,
      p3: UnfilteredwithDaveLetele
    },
    {
      name: "Best Entertainment Podcast",
      p1: ExtremelyCasualGamers,
      p2: TheDomHarveyPodcast,
      p3: CantHandleTheCrimeAndScandal,
      sponsor: "Generate Kiwisaver Scheme"
    },
    {
      name: "Best Factual Podcast",
      p1: HeavensHelpline,
      p2: KellyTarltonsFinalTreasureHunt,
      p3: AmongTheMissing
    },
    {
      name: "Best Family Podcast",
      p1: Untidy,
      p2: Alpha8,
      p3: WhyDoYouParentLikeThat
    },
    {
      name: "Best Fiction Podcast",
      p1: FuryoftheSmall,
      p2: DidTitanicSink,
      p3: Alpha8
    },
    {
      name: "Best Health and Wellbeing Podcast",
      p1: TakeItFromUswithKentJohns,
      p2: GreyAreaswithPetraBagust,
      p3: GoodShift
    },
    {
      name: "Best History Podcast",
      p1: KellyTarltonsFinalTreasureHunt,
      p2: GUILT,
      p3: HeavensHelpline
    },
    {
      name: "Best Independent Podcast",
      p1: TheCurvePodcast,
      p2: TheDomHarveyPodcast,
      p3: Interconnector,
      sponsor: "Generate Kiwisaver Scheme"
    },
    {
      name: "Best Interview Podcast",
      p1: TheDomHarveyPodcast,
      p2: BetweenTwoBeers,
      p3: UnfilteredwithDaveLetele
    },
    {
      name: "Best Māori or Pasifika Podcast",
      p1: UnfilteredwithDaveLetele,
      p2: FreshMoni,
      p3: Āio,
      sponsor: "Acast"
    },
    {
      name: "Best New Podcast",
      p1: FuryoftheSmall,
      p2: HeavensHelpline,
      p3: AmongTheMissing,
      sponsor: "Podlab"
    },
    {
      name: "Best Radio Podcast",
      p1: TheMorningRumble,
      p2: YarnswithAndy,
      p3: WitiUnderwater
    },
    {
      name: "Best Sports Podcast",
      p1: BetweenTwoBeers,
      p2: WhatALad,
      p3: FullCredit
    },
    {
      name: "Best True Crime Podcast",
      p1: GUILT,
      p2: HeavensHelpline,
      p3: TheFlood
    }
  ],
  networkAward: {
    name: "Best Network or Publisher",
    p1: TheSpinoff,
    p2: FrankPodcasts,
    p3: BHN
  },
  specialAwards: [
    {
      name: "The Climate Award",
      p1: TheFlood,
      p2: PeoplePlanetFoodScigest,
      p3: TuneintoNaturewithKarthic
    },
    {
      name: "The Creativity Award",
      p1: SatanicPanic,
      p2: FuryoftheSmall,
      p3: Interconnector
    },
    {
      name: "The Rising Star Award",
      p1: HeavensHelpline,
      p2: UnfilteredwithDaveLetele,
      p3: CantHandleTheCrimeAndScandal,
      sponsor: "AUT"
    },
    {
      name: "The Spotlight Award",
      p1: TheBoyintheWater,
      p2: GUILT,
      p3: TheDomHarveyPodcast
    }
  ],
  favourites: [
    {
      name: "Listeners' Choice Award",
      p1: BHNBigHairyNews,
      p2: TheHappySaver,
      p3: PaulTheOtherOnePodcast,
      sponsor: "Acast"
    },
    {
      name: "Judges' Picks",
      p1: Interconnector,
      p2: TheArtfulDodger,
      p3: ThatsJustCriminal
    }
  ]
}
