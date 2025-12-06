/* Sources:
   - https://www.nzpodcastawards.com/copy-of-2024-winners
   - 

*/

import { FrankPodcasts, StuffAudio, TheSpinoff } from "./network-data";
import { AlicesSoapbox, BetweenTwoBeers, BHNBigHairyNews, BigStuffQuiz, DanBainsSleepyTimeMumbles, DearJane, EndingLifeWell, EVQuest, ExtremelyCasualGamers, FreshMoni, FullDisclosureWithKarenOLeary, GetFlushed, GoneByLunchtime, HeReoTawhito, HistoryOfAotearoaNewZealand, InspiringJourneysThroughMusic, Interconnector, JenBlack, JohnRopiha, Juggernaut, KiwiYarns, LeadOnPurposeWithJamesLaughlin, LeagueOfOurOwn, MaiMorningCrew, NavigatingAdultADHD, NoSuchThingAsNormal, PowrUp, Scigest, SpearoDiaries, TheBoyintheWater, TheCryptidFactor, TheDOCSoundsOfSciencePodcast, TheDomHarveyPodcast, TheElectricRodeo, TheGirlsInterrupted, TheGoodSexProject, TheHelloFrequency, TheHoon, TheMorningShift, ThePayoff, TheTrialSeason2, TheWorkingGroup, TheWorstIdeaOfAllTime, ThisIsKiwi, TuneintoNaturewithKarthic, Untidy, WatchingTwoDetectives, WellingtonParanormal, Āio } from "./show-data";
import { AwardsYear } from "./types";



export const podcastAwards2024: AwardsYear = {
  year: 2024,
  podcastOfTheYear: {
    name: 'Podcast of the Year',
    p1: TheDomHarveyPodcast,
    p2: KiwiYarns,
    p3: TheGirlsInterrupted
  },
  bestPodcasts: [
    {
      name: 'Best Arts and Culture Podcast',
      p1: InspiringJourneysThroughMusic,
      p2: HeReoTawhito,
      p3: Interconnector
    },
    {
      name: 'Best Branded Podcast',
      p1: ThePayoff,
      p2: Untidy,
      p3: ThisIsKiwi
    },
    {
      name: 'Best Business Podcast',
      p1: FreshMoni,
      p2: LeadOnPurposeWithJamesLaughlin,
      p3: PowrUp
    },
    {
      name: 'Best Comedy Podcast',
      p1: TheWorstIdeaOfAllTime,
      p2: DanBainsSleepyTimeMumbles,
      p3: TheCryptidFactor
    },
    {
      name: 'Best Current Affairs Podcast',
      p1: TheWorkingGroup,
      p2: TheHoon,
      p3: BHNBigHairyNews
    },
    {
      name: 'Best Documentary Podcast',
      p1: Juggernaut,
      p2: TheBoyintheWater,
      p3: DearJane
    },
    {
      name: 'Best Education Podcast',
      p1: ThePayoff,
      p2: FreshMoni,
      p3: InspiringJourneysThroughMusic
    },
    {
      name: 'Best Entertainment Podcast',
      p1: TheDomHarveyPodcast,
      p2: TheGirlsInterrupted,
      p3: WellingtonParanormal
    },
    {
      name: 'Best Factual Podcast',
      p1: Juggernaut,
      p2: TheTrialSeason2,
      p3: Scigest
    },
    {
      name: 'Best Family Podcast',
      p1: Untidy,
      p2: TheHelloFrequency,
      p3: undefined
    },
    {
      name: 'Best Health and Wellbeing Podcast',
      p1: NoSuchThingAsNormal,
      p2: Āio,
      p3: NavigatingAdultADHD
    },
    {
      name: 'Best History Podcast',
      p1: HeReoTawhito,
      p2: HistoryOfAotearoaNewZealand,
      p3: Juggernaut
    },
    {
      name: 'Best Independent Podcast',
      p1: TheDomHarveyPodcast,
      p2: TheWorkingGroup,
      p3: Āio
    },
    {
      name: 'Best Interview Podcast',
      p1: KiwiYarns,
      p2: TheDomHarveyPodcast,
      p3: EndingLifeWell
    },
    {
      name: 'Best Māori or Pasifika Podcast or Host',
      p1: Āio,
      p2: FreshMoni,
      p3: HeReoTawhito
    },
    {
      name: 'Best New Podcast',
      p1: Juggernaut,
      p2: BigStuffQuiz,
      p3: DearJane
    },
    {
      name: 'Best Radio Podcast',
      p1: MaiMorningCrew,
      p2: undefined,
      p3: undefined
    },
    {
      name: 'Best Sex & Relationships Podcast',
      p1: FullDisclosureWithKarenOLeary,
      p2: TheElectricRodeo,
      p3: TheGoodSexProject
    },
    {
      name: 'Best Sports Podcast',
      p1: AlicesSoapbox,
      p2: LeagueOfOurOwn,
      p3: SpearoDiaries
    },
    {
      name: 'Best True Crime Podcast',
      p1: TheBoyintheWater,
      p2: TheTrialSeason2,
      p3: WatchingTwoDetectives
    }
  ],
  specialAwards: [
    {
      name: 'Rising Star Award',
      p1: JohnRopiha,
      p2: JenBlack,
      p3: AlicesSoapbox
    },
    {
      name: 'Spotlight Award',
      p1: BetweenTwoBeers,
      p2: GoneByLunchtime,
      p3: TheCryptidFactor
    },
    {
      name: 'Creativity Award',
      p1: DanBainsSleepyTimeMumbles,
      p2: ExtremelyCasualGamers,
      p3: GetFlushed
    },
    {
      name: 'The Climate Award',
      p1: TheDOCSoundsOfSciencePodcast,
      p2: TuneintoNaturewithKarthic,
      p3: EVQuest
    }
  ],
  favourites: [
    {
      name: 'Listeners’ Choice Award',
      p1: TheGirlsInterrupted,
      p2: BHNBigHairyNews,
      p3: TheMorningShift
    }
  ],
  networkAward: {
    name: 'Publisher of the Year',
    p1: StuffAudio,
    p2: TheSpinoff,
    p3: FrankPodcasts
  }
}