import type { Podcast, Network, Award, NetworkAward, LinkType, AwardsYear } from './types';
import { podcastAwards2025 } from './data'

// Helper functions
function getLinkIcon(type: LinkType): string {
  const icons: Record<LinkType, string> = {
    website: '🌐',
    apple: '🎧',
    spotify: '🎵',
    youtube: '📺',
    bluesky: '🦋',
    facebook: '👥'
  };
  return icons[type] || '🔗';
}

function createPodcastCard(podcast: Podcast, position: number, compact: boolean = false): string {
  const links = podcast.links.map(link => 
    `<a href="${link.link}" target="_blank" rel="noopener" title="${link.type}">${getLinkIcon(link.type)}</a>`
  ).join(' ');

  const medal = position === 1 ? 'Gold' : position === 2 ? 'Silver' : 'Bronze';
  
  if (compact) {
    return `
      <div class="podcast-card podcast-card-compact">
        <div class="medal medal-${position}">${medal}</div>
        <img src="/imgs/${podcast.image}" alt="${podcast.title}" class="podcast-image" />
        <div class="podcast-info">
          <h3>${podcast.title}</h3>
          <!-- <div class="podcast-links">${links}</div> -->
        </div>
      </div>
    `;
  }
  
  return `
    <div class="podcast-card">
      <img src="/imgs/${podcast.image}" alt="${podcast.title}" class="podcast-image" />
      <div class="podcast-info">
        <h3>${podcast.title}</h3>
        <p class="podcast-description">${podcast.description}</p>
        <!-- <div class="podcast-links">${links}</div> -->
      </div>
    </div>
  `;
}

function createNetworkCard(network: Network, position: number): string {
  const medal = position === 1 ? 'Gold' : position === 2 ? 'Silver' : 'Bronze';
  return `
    <div class="podcast-card network-card">
      <div class="medal medal-${position}">${medal}</div>
      <div class="podcast-info">
        <h3><a href="${network.link}" target="_blank" rel="noopener">${network.name}</a></h3>
      </div>
    </div>
  `;
}

function renderAward(award: Award, containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const html = `
    <div class="award-section">
      <h3>
        ${award.sponsor ? `<span class="sponsor">Sponsored by ${award.sponsor}</span>` : ''}
        ${award.name}
      </h3>
      <div class="podcasts">
        ${createPodcastCard(award.p1, 1)}
        ${createPodcastCard(award.p2, 2)}
        ${createPodcastCard(award.p3, 3)}
      </div>
    </div>
  `;
  
  container.innerHTML += html;
}

function renderGridAward(award: Award, containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const html = `
    <div class="award-grid-item">
      <h3 class="award-grid-title">
        ${award.sponsor ? ` <span class="sponsor">Sponsored by ${award.sponsor}</span>` : ''}
        ${award.name}
      </h3>
      <div class="award-winner">
        ${createPodcastCard(award.p1, 1)}
      </div>
      <div class="award-runners-up">
        ${createPodcastCard(award.p2, 2, true)}
        ${createPodcastCard(award.p3, 3, true)}
      </div>
    </div>
  `;
  
  container.innerHTML += html;
}

function renderNetworkAward(award: NetworkAward, containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const html = `
    <div class="award-section">
      <h3>${award.name}</h3>
      <div class="podcasts">
        ${createNetworkCard(award.p1, 1)}
        ${createNetworkCard(award.p2, 2)}
        ${createNetworkCard(award.p3, 3)}
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

// Render the awards
export function renderAllAwards(data: AwardsYear) {
  // Podcast of the Year
  renderAward(data.podcastOfTheYear, 'podcast-of-the-year');
  
  // Category Awards - Grid Layout
  const categoryContainer = document.getElementById('category-awards');
  if (categoryContainer) {
    categoryContainer.className = 'awards-grid';
  }
  data.bestPodcasts.forEach(award => {
    renderGridAward(award, 'category-awards');
  });
  
  // Special Awards - Grid Layout
  const specialContainer = document.getElementById('special-awards');
  if (specialContainer) {
    specialContainer.className = 'awards-grid';
  }
  data.specialAwards.forEach(award => {
    renderGridAward(award, 'special-awards');
  });
  
  // Favourites
  data.favourites.forEach(award => {
    renderAward(award, 'favourite-awards');
  });
  
  // Network Award
  renderNetworkAward(data.networkAward, 'network-award');
}



// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => renderAllAwards(podcastAwards2025));
} else {
  renderAllAwards(podcastAwards2025);
}
