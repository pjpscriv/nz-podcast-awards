import type { AwardsYear } from '../types';
import { podcastAwards2024 } from './2024-awards';
import { podcastAwards2025 } from './2025-awards';


export const awardsData: Record<string, AwardsYear> = {
  '2025': podcastAwards2025,
  '2024': podcastAwards2024
};
