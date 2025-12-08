import { awardsData } from './data/awards';
import type { Award, AwardsYear, Link, LinkType, Network, NetworkAward, Podcast } from './types';

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

function createNetworkCard(network: Network, position: number, compact: boolean = false): string {
  const medal = position === 1 ? 'Gold' : position === 2 ? 'Silver' : 'Bronze';
  const imgUrl = import.meta.env.BASE_URL + 'imgs/networks/' + network.image;
  return `
    <div class="podcast-card network-card ${compact ? 'podcast-card-compact' : ''}">
      <div class="medal medal-${position}">${medal}</div>
      <img src="${imgUrl}" alt="${network.name}" class="podcast-image" />
      <div class="podcast-info">
        <h3><a href="${network.link}" target="_blank" rel="noopener">${network.name}</a></h3>
      </div>
    </div>
  `;
}

function renderHighlightedNetworkAward(award: NetworkAward, containerId: string) {
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
        ${createNetworkCard(award.p1, 1, false)}
      </div>
      <div class="highlight-runners-up">
        ${createNetworkCard(award.p2, 2, true)}
        ${createNetworkCard(award.p3, 3, true)}
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

function renderGridSection(awards: Award[], containerId: string) {
  const categoryContainer = document.getElementById(containerId);
  if (categoryContainer) {
    categoryContainer.innerHTML = '';
    categoryContainer.className = 'awards-grid';
  }
  awards.forEach(award => {
    renderGridAward(award, containerId);
  });
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

function renderAllAwards(data: AwardsYear) {
  renderTableOfContents(data);
  renderHighlightedAward(data.podcastOfTheYear, 'podcast-of-the-year');
  renderGridSection(data.bestPodcasts, 'category-awards');
  renderGridSection(data.specialAwards, 'special-awards');
  renderGridSection(data.favourites, 'favourite-awards');
  renderHighlightedNetworkAward(data.networkAward, 'network-award');
}

// Event Handler
function handleYearChange(event: Event): void {
  const select = event.target as HTMLSelectElement;
  const year = select.value;
  const data = awardsData[year];
  if (!data) return;
  renderAllAwards(data);
}

// Initial Setup
function setup(): void {
  renderAllAwards(awardsData['2025']);
  const yearSelector = document.getElementById('year-selector');
  if (yearSelector) {
    yearSelector.addEventListener('change', handleYearChange);
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setup());
} else {
  setup();
}
