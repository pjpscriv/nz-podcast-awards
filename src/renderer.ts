import { podcastAwards2025 } from './data-2025';
import { podcastAwards2024 } from './data-2024';
import type { AwardsYear, Link, LinkType, Network, NetworkAward, Podcast, Award } from './types';

// Helper functions
function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function getLinkText(type: LinkType): string {
  const icons: Record<LinkType, string> = {
    website: 'Website',
    apple: 'Apple',
    spotify: 'Spotify',
    youtube: 'YouTube',
  };
  return icons[type] || 'Link';
}

function linkToHtml(link: Link): string {
  return `<a href="${link.link}" target="_blank" rel="noopener" title="${link.type}">${getLinkText(link.type)}</a>`;
}

// Rendering functions
function createPodcastCard(podcast: Podcast, position: number, compact: boolean = false, description: boolean = false): string {
  const links = podcast.links.map(linkToHtml).join(' ');
  const medal = position === 1 ? 'Gold' : position === 2 ? 'Silver' : 'Bronze';
  const imgUrl = import.meta.env.BASE_URL + 'imgs/' + podcast.image;
  return `
    <div class="podcast-card ${compact ? 'podcast-card-compact' : ''}">
      <div class="medal medal-${position}">${medal}</div>
      <img src="${imgUrl}" alt="${podcast.title}" class="podcast-image" />
      <div class="podcast-info">
        <h3>${podcast.title}</h3>
        ${description ? `<p class="podcast-description">${podcast.description}</p>` : ''}
        <div class="podcast-links">${links}</div>
      </div>
    </div>
    `;
}

function createNetworkCard(network: Network, position: number): string {
  const medal = position === 1 ? 'Gold' : position === 2 ? 'Silver' : 'Bronze';
  const imgUrl = import.meta.env.BASE_URL + 'imgs/networks/' + network.image;
  return `
    <div class="podcast-card network-card">
      <div class="medal medal-${position}">${medal}</div>
      <img src="${imgUrl}" alt="${network.name}" class="podcast-image" />
      <div class="podcast-info">
        <h3><a href="${network.link}" target="_blank" rel="noopener">${network.name}</a></h3>
      </div>
    </div>
  `;
}

function renderHighlightedAward(award: Award, containerId: string) {
  const title = document.querySelector(`h2:has(+ #${containerId})`);
  const container = document.getElementById(containerId);
  if (!container || !title) {
    console.error(`Could not find container or title for ${containerId}`);
    return;
  }
  title.innerHTML = `
    ${award.sponsor ? `<div class="sponsor">Sponsored by ${award.sponsor}</div>` : ''}
    ${award.name}
  `;
  container.innerHTML = `
    <div class="award-section">
      <div class="highlight-winner">
        ${createPodcastCard(award.p1, 1, false, true)}
      </div>
      <div class="highlight-runners-up">
        ${award.p2 ? createPodcastCard(award.p2, 2, true, false) : ''}
        ${award.p3 ? createPodcastCard(award.p3, 3, true, false) : ''}
      </div>
    </div>
  `;
}

function renderGridAward(award: Award, containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const html = `
    <div class="award-grid-item" id="${slugify(award.name)}">
      <h3 class="award-grid-title">
        ${award.sponsor ? `<span class="sponsor">Sponsored by ${award.sponsor}</span>` : ''}
        ${award.name}
      </h3>
      <div class="award-winner">
        ${createPodcastCard(award.p1, 1)}
      </div>
      <div class="award-runners-up">
        ${award.p2 ? createPodcastCard(award.p2, 2, true) : ''}
        ${award.p3 ? createPodcastCard(award.p3, 3, true) : ''}
      </div>
    </div>
  `;

  container.innerHTML += html;
}

function renderNetworkAward(award: NetworkAward, containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="award-section" id="${slugify(award.name)}">
      <h3>${award.name}</h3>
      <div class="podcasts">
        ${createNetworkCard(award.p1, 1)}
        ${createNetworkCard(award.p2, 2)}
        ${createNetworkCard(award.p3, 3)}
      </div>
    </div>
  `;
}

function renderTableOfContents(data: AwardsYear) {
  const container = document.getElementById('table-of-contents');
  if (!container) return;
  const categoryLinks = data.bestPodcasts.map(award => `<li><a href="#${slugify(award.name)}">${award.name}</a></li>`);
  const specialLinks = data.specialAwards.map(award => `<li><a href="#${slugify(award.name)}">${award.name}</a></li>`);
  const favouriteLinks = data.favourites.map(award => `<li><a href="#${slugify(award.name)}">${award.name}</a></li>`);
  container.innerHTML = `
    <summary><i>Table of Contents</i></summary>
    <ul class="table-of-contents-list">
      <li class="section-title"><a href="#podcast-of-the-year">Podcast of the Year</a></li>
      <li class="section-title"><a href="#category-awards">Best Podcasts by Category</a></li>
      <ul class="sub-list">
        ${categoryLinks.join('')}
      </ul>
      <li class="section-title"><a href="#special-awards">Special Awards</a></li>
      <ul class="sub-list">
        ${specialLinks.join('')}
      </ul>
      <li class="section-title"><a href="#favourite-awards">Judge & Listener Favourites</a></li>
      <ul class="sub-list">
        ${favouriteLinks.join('')}
      </ul>
      <li class="section-title"><a href="#network-award">Best Network or Publisher</a></li>
    </ul>
  `;
}

// Render the awards
export function renderAllAwards(data: AwardsYear) {
  // Add table of contents
  renderTableOfContents(data);

  // Podcast of the Year
  renderHighlightedAward(data.podcastOfTheYear, 'podcast-of-the-year');

  // Category Awards - Grid Layout
  const categoryContainer = document.getElementById('category-awards');
  if (categoryContainer) {
    categoryContainer.innerHTML = '';
    categoryContainer.className = 'awards-grid';
  }
  data.bestPodcasts.forEach(award => {
    renderGridAward(award, 'category-awards');
  });

  // Special Awards - Grid Layout
  const specialContainer = document.getElementById('special-awards');
  if (specialContainer) {
    specialContainer.innerHTML = '';
    specialContainer.className = 'awards-grid';
  }
  data.specialAwards.forEach(award => {
    renderGridAward(award, 'special-awards');
  });

  // Favourites
  const favouriteContainer = document.getElementById('favourite-awards');
  if (favouriteContainer) {
    favouriteContainer.innerHTML = '';
    favouriteContainer.className = 'awards-grid';
  }
  data.favourites.forEach(award => {
    renderGridAward(award, 'favourite-awards');
  });

  // Network Award
  renderNetworkAward(data.networkAward, 'network-award');
}


// Run when DOM is ready
const awardsData: Record<string, AwardsYear> = {
  '2025': podcastAwards2025,
  '2024': podcastAwards2024
};

function handleYearChange(event: Event) {
  const select = event.target as HTMLSelectElement;
  const year = select.value;
  const data = awardsData[year];
  if (data) {
    renderAllAwards(data);
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderAllAwards(podcastAwards2025);

    // Setup year selector
    const yearSelector = document.getElementById('year-selector');
    if (yearSelector) {
      yearSelector.addEventListener('change', handleYearChange);
    }
  });
} else {
  // Initial render if already loaded
  renderAllAwards(podcastAwards2025);

  // Setup year selector if already loaded
  const yearSelector = document.getElementById('year-selector');
  if (yearSelector) {
    yearSelector.addEventListener('change', handleYearChange);
  }
}
