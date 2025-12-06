/* 
  Sources:
    - https://stoppress.co.nz/news/new-zealand-podcast-awards-2025-winners-announced/
    - https://podnews.net/press-release/new-zealand-podcast-awards-2025
    - https://www.instagram.com/nzpodcastawards/
    - https://www.nzpodcastawards.com/pressrelease2023
    - One million Google searches
*/

import type { Podcast, Network, AwardsYear } from './types';

// Podcasts
const TheDomHarveyPodcast: Podcast = {
  title: 'The Dom Harvey Podcast',
  image: 'TheDomHarveyPodcast.jpg',
  links: [{
    link: 'https://www.dom.co.nz/#ListenNow',
    type: 'website'
  }, {
    link: 'https://www.youtube.com/@domharveynz',
    type: 'youtube'
  }],
  description: "It started off as a podcast about people who run… Now it’s just a podcast about people. Hosted by New Zealand broadcaster, author and marathon runner, Dom Harvey."
}
const Interconnector: Podcast = {
  title: 'Interconnector',
  image: 'Interconnector.jpg',
  links: [{
    link: 'https://www.youtube.com/@Interconnector-podcast',
    type: 'youtube'
  },{
    link: 'https://open.spotify.com/show/40vpfpl0QFF0euLQHT9hYP',
    type: 'spotify'
  }],
  description: "Exploring guest's journeys through 6 degrees of song and how those tracks fit together. Exes, festivals, fun facts, car rides, benders and the host of endless reasons why one song is connected to another."
}
const WhatMattersMost: Podcast = {
  title: 'What Matters Most',
  image: 'WhatMattersMost.jpg',
  links: [{
    link: 'https://podcasts.apple.com/nz/podcast/what-matters-most/id1674452457',
    type: 'apple'
  }, {
    link: 'https://open.spotify.com/show/4YlNxP3qN4NmugpOIrO4Bi',
    type: 'spotify'
  }],
  description: 'What Matters Most shines the light on the therapy we need in our everyday lives. Drawing from the minds of two friends, Jacqui Maguire a clinical psychologist and Antonia Prebble, an actress and presenter, we create a space for exploring everyday issues that make up the moral and cultural climate of our era. Each week Antonia will bring the topic, Jacqui will bring the therapist lens, and together they will get curious. It’s as simple as that! Conversations between two friends that support, provide practical tools, are light hearted at times, joyful, soulful and offer that little bit of ‘friendship mixed with therapy’ on the days that you might need it. Hosted on Acast. See acast.com/privacy for more information.'
}
const WhentheFactsChange: Podcast = {
  title: 'When the Facts Change',
  image: 'WhentheFactsChange.jpg',
  links: [{
    link: 'https://thespinoff.co.nz/podcasts/when-the-facts-change',
    type: 'website'
  }, {
    link: 'https://open.spotify.com/show/0X68XlKhsSof6pfpzNhkW8',
    type: 'spotify'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/when-the-facts-change/id1558395118',
    type: 'apple'
  }],
  description: 'When the Facts Change, Hosted by journalist Bernard Hickey, When the Facts Change is your essential weekly guide to the intersection of economics, business and politics in Aotearoa New Zealand. Presented by The Spinoff.\n\nWhen the Facts Change is currently on hiatus and is open for sponsorship. For more details, contact bec@thespinoff.co.nz'
}
const TheMeldingMusePodcast: Podcast = {
  title: 'The Melding Muse Podcast',
  image: 'TheMeldingMusePodcast.jpg',
  links: [{
    link: 'https://themeldingmuse.co/podcast/',
    type: 'website'
  }, {
    type: 'apple',
    link: 'https://podcasts.apple.com/nz/podcast/the-melding-muse-podcast/id1737689867'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/1YfmwMXUM5s4agFgcIB5RK'
  }, {
    type: 'youtube',
    link: 'https://www.youtube.com/@TheMeldingMuse'
  }],
  description: '🫠 Melding art & design, music, film, entrepreneurship, fashion, sports, gaming and whatever is in between. Showcasing extraordinary people to inspire the next generation of creatives & leaders. We explore their roots, journeys, and the pivotal moments that have shaped their lives and careers. These are stories that motivate us to continually challenge ourselves, push boundaries and ultimately reinvent ourselves time and time again. Streaming from the land of the long white cloud - Aotearoa, New Zealand 🇳🇿'
}
const ParentsWeveMet: Podcast = {
  title: 'Parents We’ve Met',
  image: 'ParentsWeveMet.jpg',
  links: [{
    link: 'https://podcasts.apple.com/ca/podcast/parents-weve-met/id1710061323',
    type: 'apple'
  }, {
    type: 'website',
    link: 'https://parentingplace.nz/podcast'
  }, {
    type: 'youtube',
    link: 'https://www.youtube.com/playlist?list=PLnkO9AkkN8xgIda43rFF_6BpUZRX0f6z5'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/4lqo95ea1P92VG2lkp1ghp'
  }],
  description: 'The podcast for glorious, horrendous and hilarious conversations about parenthood.\nJoin co-hosts Jenny Hale (author and parent coach) and Dayna Galloway (former TV presenter and mum-to-two) as they chat with some well-known New Zealanders who they admire, and who just like them, are navigating the wild and wonderful terrain of parenthood. With Jenny’s expert guidance, they’ll delve into a wide range of topics, from sleepless nights, social media struggles, picky eating and tricky toddler behaviour, to grief, loss and mental health.'
}
const AccidentalBusinessOwners: Podcast = {
  title: 'Accidental Business Owners',
  image: 'AccidentalBusinessOwners.jpg',
  links: [{
    link: 'https://www.youtube.com/playlist?list=PLYdbwbncRyUN8cwPYEziRSnAVBRlQnAM-',
    type: 'youtube'
  }, {
    type: 'apple',
    link: 'https://podcasts.apple.com/nz/podcast/whats-an-accidental-business-owner-introducing-our/id1490487324?i=1000663769689'
  }],
  description: "A podcast about business, life, mindset, relationships and the inside story of a pretty wild last 12 months. Hosted by Steve Holloway and Seamus Marten who started a podcast called Between Two Beers nearly five years ago Steve's Hamilton garage, along with Di Foster - a business coach who specializes in helping Accidental Business Owners find their way. The podcast tells their story, and comes out in 30 minute, live coaching sessions. Through the series there are laughs, tears and some pretty brutal honesty - but it's something all three are really proud of."
}
const FreshMoni: Podcast = {
  title: 'Fresh Moni',
  image: 'FreshMoni.jpg',
  links: [{
    link: 'https://www.freshmoni.co.nz/podcasts',
    type: 'website'
  }, {
    type: 'apple',
    link: 'https://podcasts.apple.com/us/podcast/fresh-moni/id1751690051'
  }, {
    type: 'youtube',
    link: 'https://www.youtube.com/@willieleotafreshmoni'
  }, {
    link: 'https://open.spotify.com/show/6rk44Gy41y6tXsWEaGWxFw',
    type: 'spotify'
  }],
  description: "Introducing the Fresh Moni podcast where we are breaking the silence on money. Whether it's personal finance, business, investments, or navigating financial challenges, we'll be talking about it. Hosted by Willie Leota, a Samoan Mortgage Adviser, this podcast is your go-to resource for mastering your finances and building wealth. Get ready for candid conversations, expert insights, and practical tips to empower your financial journey. Welcome to Fresh Moni!"
}
const HumanInTheLoop: Podcast = {
  title: 'Human In The Loop',
  image: 'HumanInTheLoop.jpg',
  links: [{
    link: 'https://shows.acast.com/human-in-the-loop',
    type: 'website'
  }, {
    link: 'https://www.rush.co.nz/podcast',
    type: 'website'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/human-in-the-loop/id1814257298',
    type: 'apple'
  }, {
    type: 'youtube',
    link: 'https://www.youtube.com/@humanintheloopnz'
  }],
  description: "🤖 Human in the Loop - Where AI Meets Human Intelligence. Join us for entertaining and in-depth discussions exploring the dynamic intersection of artificial intelligence and human expertise. From emerging technologies to ethical AI development, we examine how human oversight and creativity enhance automated systems. Whether you're a tech professional, business owner, or simply curious about AI's role in society, this channel bridges the gap between complex technology and human understanding. Subscribe for weekly insights on AI, automation, and the human element that makes technology truly effective."
}
const CantHandleTheCrimeAndScandal: Podcast = {
  title: 'Can’t Handle The Crime And Scandal',
  image: 'CantHandleTheCrimeAndScandal.jpg',
  links: [{
    link: 'https://podcasts.apple.com/nz/podcast/cant-handle-the-crime-and-scandal/id1732949337',
    type: 'apple'
  }, {
    link: 'https://open.spotify.com/show/4pOHKN5NYhP96XG851uK9Q',
    type: 'spotify'
  }],
  description: "Unfiltered. Unqualified. Unapologetic. Get ready for a wild ride through chilling true crime cases and jaw-dropping scandals from every corner of the globe – all served up by your favourite twin sisters, Rainy & Lollie! Living across the ditch from one another (Rainy in New Zealand, Lollie in Australia), these dynamic, hilarious, and unfiltered twins reunite every week for an episode that’s packed with dark twists, sharp banter, and a whole lot of heart. With a bond like no other, Rainy & Lollie dive deep into the stories that captivate and terrify, balancing suspense with plenty of laughs. You’ll get the inside scoop on everything from unsolved mysteries to infamous scandals, all with the respect the stories deserve—and a dash of their signature unqualified, unapologetic commentary. Tune in every Wednesday for a new episode."
}
const DidTitanicSink: Podcast = {
  title: 'Did Titanic Sink',
  image: 'DidTitanicSink.jpg',
  links: [{
    link: 'https://www.rnz.co.nz/podcast/did-titanic-sink',
    type: 'website'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/2Bbzn39zlpT1yi8TB9mDBS'
  }, {
    type: 'apple',
    link: 'https://podcasts.apple.com/nz/podcast/did-titanic-sink/id1640615093'
  }],
  description: "In season 2, Tim and Carlo go hunting for the mysterious Canterbury Cat. So what's a censored first edition expose of the Titanic's sinking got to do with that?"
}
const WellingtonParanormal: Podcast = {
  title: 'Wellington Paranormal',
  image: 'WellingtonParanormal.jpg',
  links: [{
    type: 'apple',
    link: 'https://podcasts.apple.com/nz/podcast/wellington-paranormal-the-podcast/id1713906928',
  }, {
    type: 'youtube',
    link: 'https://www.youtube.com/channel/UCEt0-86-vK4xXKAe-3MB00A'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/47uhuVdHQafFPGL9RymTQh'
  }],
  description: "Created by Jemaine Clement and Taika Waititi, Wellington Paranormal’s television debut in 2018 took Aotearoa by storm and its international release saw it shoot to #1 on the streaming charts in the USA, beating Rick and Morty, Ted Lasso and everything else (it was #1!). Now you can hear the stars of Wellington Paranormal (Mike Minogue and Karen O'Leary) stumble their way through their very own podcast, where they discuss making the \"greatest tv show of all time\" (according to their mums). The para-cop-mockumentary is beloved the world over, with millions of fans watching classic kiwi talents like Rhys Darby, Cori Gonzales-Maceur Lynda Topp and Mel Bracewell."
}
const TheDetail: Podcast = {
  title: 'The Detail',
  image: 'TheDetail.jpg',
  links: [{
    link: 'https://www.rnz.co.nz/podcast/the-detail',
    type: 'website'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/3cd97Zh9oRlNtOPqxxjErz'
  }],
  description: "Join The Detail team six days a week as they make sense of the big stories with the country’s best journalists and experts. "
}
const LockedOutwithCraigRenney: Podcast = {
  title: 'Locked Out with Craig Renney',
  image: 'LockedOutwithCraigRenney.jpg',
  links: [{
    link: 'https://podcasts.apple.com/nz/podcast/locked-out-with-craig-renney/id1808605235',
    type: 'apple'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/5S61sj9vSNHgub3CVw9ij9'
  }],
  description: "Economist Craig Renney gives weekly insights into the numbers that we hear about from the government, Craig will cut through the noise and translate what all those massive governmental numbers mean for the average Joe and Jane."
}
const TheFrontlinewithDrGaryPayinda: Podcast = {
  title: 'The Frontline with Dr Gary Payinda',
  image: 'TheFrontlinewithDrGaryPayinda.jpg',
  links: [{
    link: 'https://podcasts.apple.com/nz/podcast/the-frontline-with-dr-gary-payinda/id1822127231',
    type: 'apple'
  }, {
    link: 'https://bhn.nz/shows/the-frontline/',
    type: 'website'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/4wuGLEturBzWvOt3VjUhzZ'
  }],
  description: "Frontline Kiwi workers are struggling to pay for food and rent, while politicians are giving away billions to the very rich. Public services are being cut back, privatised, and sold off. This is not how you build a stronger, healthier, or safer society. It’s time to stop the vandalism and rebuild NZ. Join Dr Gary Payinda and guests on The Frontline."
}
const KellyTarltonsFinalTreasureHunt: Podcast = {
  title: 'Kelly Tarlton’s Final Treasure Hunt',
  image: 'KellyTarltonsFinalTreasureHunt.jpg',
  links: [{
    link: 'www.rnz.co.nz/podcast/kelly-tarltons-final-treasure-hunt/',
    type: 'website'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/2tKgwytiegr6UJ3526EdyV'
  }],
  description: "40 years after the untimely death of Kelly Tarlton, a team made up of friends, family and marine enthusiasts embark upon an adventure to complete one of his final expeditions."
}
const SatanicPanic: Podcast = {
  title: 'Satanic Panic',
  image: 'SatanicPanic.jpg',
  links: [{
    link: 'https://podcasts.apple.com/us/podcast/delve/id1691056155',
    type: 'apple'
  }],
  description: "Peter Ellis, the Creche Case & Me: In never-before-heard interviews, this gripping series takes you inside one of New Zealand’s most controversial legal cases, when a kind of madness gripped Christchurch, resulting in a miscarriage of justice that would take 30 years to put right. Satanic Panic is the first Melanie Reid podcast, now re-released and available on DELVE."
}
const GUILT: Podcast = {
  title: 'GUILT - Season 6',
  image: 'GUILT.jpg',
  links: [{
    link: 'https://www.theguiltpodcast.com/',
    type: 'website'
  }, {
    type: 'apple',
    link: 'https://podcasts.apple.com/nz/podcast/guilt/id1590713932'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/3LxK0NL9Dz4wuW5xp4SMRa'
  }],
  description: "On August 28th 1999, 16 year old Jessica Gaudie was babysitting in Nambour, Sunshine Coast, Australia, when she vanished without a trace. In 2001 Aboriginal tracker Derek Sam was convicted of her murder, but denies his involvement and will not lead Police to Jessica's remains. 26 years later Ryan is on the ground in Australia looking for answers, and finds that he's not just looking for one missing woman, he's looking for three."
}
const TheCurvePodcast: Podcast = {
  title: 'The Curve Podcast',
  image: 'TheCurve.jpg',
  links: [{
    link: 'https://thecurveplatform.com/',
    type: 'website'
  }, {
    type: 'apple',
    link: 'https://podcasts.apple.com/nz/podcast/the-curve/id1566816026'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/5bPX8C8gQLUtvZkPVSp7ss'
  }],
  description: "The Curve is a platform to learn more about money. To change the stereotype that these conversations are typically boring, and only for men in suits. Victoria has worked in the finance and investing world for 13 years, and Sophie is a total novice. Learn alongside her as she asks all the questions you're thinking, but might feel a little embarrassed to ask. This podcast will give you all the tools and knowledge to achieve financial freedom, as well as (hopefully) having a laugh along the way."
}
const Untidy: Podcast = {
  title: 'Untidy',
  image: 'Untidy.jpg',
  links: [{
    link: 'https://www.untidypodcast.com/',
    type: 'website'
  }, {
    type: 'apple',
    link: 'https://podcasts.apple.com/nz/podcast/untidy/id1670524338'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/6FKRdV8xqVU3vP5jfJ3TKi'
  }],
  description: "Untidy honours the person within the parent. Hosts, Matilda Green and Hannah Davison, dive into the undergrowth of sex and relationships, mental health, healing, body issues, identity questions, and more with a range of guests. Connect, laugh, learn, and keep moving forward."
}
const UnfilteredwithDaveLetele: Podcast = {
  title: 'Unfiltered with Dave Letele',
  image: 'UnfilteredWithDaveLetele.jpg',
  links: [{
    link: 'https://shows.acast.com/unfiltered-with-dave-letele',
    type: 'website'
  }, {
    type: 'apple',
    link: 'https://podcasts.apple.com/nz/podcast/unfiltered-with-dave-letele/id1796309582'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/3XB3nlJQXocvWrM5AWVvR1'
  }],
  description: "Welcome to Unfiltered with Dave Letele.This podcast is all about raw, honest, and inspiring conversations. Join Dave as he engages with remarkable guests to delve into their life stories, exploring their triumphs, struggles, and the real journeys behind their successes. Tune in for unfiltered discussions which will motivate, challenge, and inspire you to see life from a fresh perspective. Get ready to be moved."
}
const ExtremelyCasualGamers: Podcast = {
  title: 'Extremely Casual Gamers',
  image: 'ExtremelyCasualGamers.jpg',
  links: [{
    link: 'https://open.spotify.com/show/2NFnZ8xa5d9LMZbKP27Gey',
    type: 'spotify'
  }, {
    type: 'youtube',
    link: 'https://www.youtube.com/@ecgpodcast'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/extremely-casual-gamers-with-ellie-chris-guy/id1701697963',
    type: 'apple'
  }],
  description: "A weekly casual gaming podcast for the everyday gamer. Hosted by mobile gamer Ellie Harwood. Featuring big game trophy hunter Chris Key. And Mr gives-up-halfway-through gamer, Guy Mansell. Throw in a dash of gaming news, personal reviews and you've got the ECG Podcast."
}
const HeavensHelpline: Podcast = {
  title: 'Heaven’s Helpline',
  image: 'HeavensHelpline.jpg',
  links: [{
    link: 'https://open.spotify.com/show/1Je06h0lSL8uVQsd2tbpCX',
    type: 'spotify'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/heavens-helpline/id1772834195',
    type: 'apple'
  }],
  description: "How far has the Mormon church gone to cover up abuse? When journalist Murray Jones started looking into the church's finances in New Zealand, an intriguing Facebook post alerted him to a much bigger - and much darker - scandal. From the NZ Herald, Heaven's Helpline is a six-part investigation into how the Church of Jesus Christ of Latter-day Saints built a system that protects its wealth and reputation – and shields sexual predators from the law. "
}
const AmongTheMissing: Podcast = {
  title: 'Among The Missing',
  image: 'AmongTheMissing.jpg',
  links: [{
    link: 'https://www.amongthemissingpodcast.com/',
    type: 'website'
  },{
    type: 'apple',
    link: 'https://podcasts.apple.com/nz/podcast/among-the-missing/id1774082897'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/6UtqJ8WzoYu6a5Eo1gxtXL'
  }],
  description: "On January 28, 2017, Elaine Park vanished without a trace. Five days later, her car was found on Pacific Coast Highway in Malibu - keys in the ignition, lights still on, and all of her belongings inside. The only thing missing, was Elaine. Hosted by Troy Taylor, Among The Missing examines every detail of Elaine's case - evidence, timelines and testimonies - whilst also exploring the personal toll of chasing answers across years of investigation, from the other side of the globe. Both a search for truth and a journey into the weight of obsession, the series shines a light on Elaine's disappearance, and the unanswered questions that still demand justice. "
}
const Alpha8: Podcast = {
  title: 'Alpha 8',
  image: 'Alpha8.jpg',
  links: [{
    link: 'https://www.alpha8audio.com/',
    type: 'website'
  }, {
    type: 'apple',
    link: 'https://podcasts.apple.com/nz/podcast/alpha-8/id1675414859'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/4We1iexrCpqWFSTsmOTxJy'
  }],
  description: "An alien swap turns a family upside down! This award-winning sci-fi adventure blends E.T. with The Princess Diaries and a Freaky Friday twist. What happens when a desperate alien from another planet swaps places with a struggling mom to understand the meaning of family and save her own kind from extinction? Dive into Alpha 8, an eight-episode audio drama that explores identity, parenthood, and unexpected connections. Follow an extraterrestrial being trying to grasp human emotions while a real mother fights for her freedom, all set against a backdrop of government secrets and domestic chaos. Discover a heartfelt, fun series that asks: what does it truly mean to be a good parent? Alpha 8 features RICHARD LEACOCK as Michael, JASMINE ASHANTI as Larson and Alpha 8, JESSI MECHLER as SAMANTHA, TODD GAJDUSEK as Dr. Stevens, CAMERON ELIE as Daniel, MALACHI JOSIAH WHITE as Jackson, SYDNEY THOMAS as Taryn, SAM GIPSON as Ramirez, JAKE FARRAGO as Willis, STEPHANIE MAURA SANCHEZ as Summer, NAOMI CHAN as Delta Leader, and OMARI WILLIAMS as Brady. Additional performances by Jessica McKay, Gabe Brown, Stephanie Elie, Chris Power, John Comerford, Myla Elie, Joe Bratcher, Jaime Sutor, Wendy Pierce, Stuart Pankin and Craig Elie. Created by award-winning writer Stephanie Elie, Alpha 8 is a Bizzie Media Group production. Sound design by Xperience J, original music by Steven Bias, and story editing by Jake Farrago. Executive Produced by Haywood L. Brown, Craig Elie, and June Bayha. Music by Epidemic Sound. Recorded at Dave & Dave Recording Studio. Show Art by Tal Minear. Special thanks to Joe Bratcher and Twin Bridges."
}
const WhyDoYouParentLikeThat: Podcast = {
  title: 'Why Do You Parent Like That?',
  image: 'WhyDoYouParentLikeThat.jpg',
  links: [{
    link: 'https://podcasts.apple.com/nz/podcast/why-do-you-parent-like-that/id1806781555',
    type: 'apple'
  }, {
    link: 'https://open.spotify.com/show/52yXfuDvKnI9Rg9qrCGS44',
    type: 'spotify'
  }, {
    link: 'https://www.youtube.com/@WhyDoYouParentLikeThatPodcast',
    type: 'youtube'
  }],
  description: "Why Do You Parent Like That is a parenting podcast with one set of questions and one million ways to parent. Join host (and ya new bestie!) Abbey Harrison as she interviews a new parent each week and asks them the same five questions. The goal is to hear how wildly different answers to the same questions are depending on who is answering them. As a parent it's easy to feel like everyone is parenting the same way except for you, we're here to show you that that's not true! This pod is all about celebrating and learning from alllll kinds of parenting. We are stoked to have you here!"
}
const FuryoftheSmall: Podcast = {
  title: 'Fury of the Small',
  image: 'FuryoftheSmall.jpg',
  links: [{
    link: 'https://thespinoff.co.nz/podcasts/fury-of-the-small',
    type: 'website'
  }, {
    link: 'https://open.spotify.com/show/69EtOnt5NUQa72kYlOYr5E',
    type: 'spotify'
  }],
  description: "The Wild Magic Tavern presents Fury of the Small, a limited series D&D podcast made in partnership with The Spinoff. Featuring a stellar cast of Aotearoa's finest storytellers, richly detailed soundscapes and a sweeping musical score, Fury of the Small is an audio adventure like no other."
}
const TakeItFromUswithKentJohns: Podcast = {
  title: 'Take It From Us with Kent Johns',
  image: 'TakeItFromUswithKentJohns.jpg',
  links: [{
    link: 'https://open.spotify.com/show/7jTgZfsk1edlaBEroPYmtp',
    type: 'spotify'
  }, {
    link: 'https://podcasts.apple.com/ca/podcast/take-it-from-us-with-kent-johns/id1822663576',
    type: 'apple'
  }],
  description: "Take It From Us is the voice of lived experience. In this podcast, you'll hear real people share honest stories about mental health, addiction, trauma and recovery - straight from their own journeys. They'll tell you what actually worked, what didn't, and what they wish they'd known sooner. Host Kent Johns is a former broadcaster-turned-health-coach who believes everyone has a story to tell if people take the time to really listen. So settle in, you're going to hear some stories. Take it from us - and from them."
}
const GreyAreaswithPetraBagust: Podcast = {
  title: 'Grey Areas with Petra Bagust',
  image: 'GreyAreaswithPetraBagust.jpg',
  links: [{
    link: 'https://greyareas.nz/',
    type: 'website'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/grey-areas-with-petra-bagust/id1611622249',
    type: 'apple'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/2ukunELyen7fCwVzqvXHvd'
  }],
  description: "Kia ora and nau mai haere mai to Grey Areas with me, Petra Bagust. This is about growing up and going grey, in Aotearoa New Zealand because I’m getting older. And so are you. So how do we do it well? I reckon we can do it with a bit of gorgeousness and gusto and break that ‘getting old’ mould just a little. Or maybe more than a little. So join me as we climb into some of those topics that just aren't so clear-cut, maybe are a little chewy, a little crunchy… and let’s journey our way through them. I've got a group of wonderful wāhine, and the odd beaut bloke, to chat with, and we're going to share some wisdom that we've discovered along the way. And I’d love for you to share your wisdom with me too, because everybody has something to offer."
}
const GoodShift: Podcast = {
  title: 'Good Shift',
  image: 'GoodShift.jpg',
  links: [{
    link: 'https://open.spotify.com/show/0uFokUywobGlQ4vA0uHBDR',
    type: 'spotify'
  }, {
    link: 'https://www.podlab.co.nz/recorded-by-us/good-shift',
    type: 'website'
  }],
  description: "Good Shift is about navigating career transitions with clarity, confidence, and purpose. Whether you're making a bold move, starting something of your own, or just looking for more fulfillment in your work, this podcast explores the mindset shifts, practical strategies, and real stories that can help you take the next step. Through conversations with relatable people who’ve redefined success on their own terms, we break down the doubts, challenges, and wins that come with making a shift - big or small."
}
const BetweenTwoBeers: Podcast = {
  title: 'Between Two Beers',
  image: 'BetweenTwoBeers.jpg',
  links: [{
    link: 'https://www.betweentwobeerspodcast.com/',
    type: 'website'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/between-two-beers-podcast/id1490487324',
    type: 'apple'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/4Q2BaWlkCZ2B2jM48L0HjG'
  }],
  description: "Good questions. Great guests. Few beers... Steve and Seamus like asking good questions. And they love good answers. After over 20 years of friendship, they bought a microphone and started a podcast, allowing them to sit with, and learn from, the most interesting people they can access. From Kiwi legend Marc Ellis, to media personalities Jeremy Wells and Paddy Gower, Rugby coach extraordinaire Wayne Smith, sexologist Morgan Penn, and Olympian Dame Lisa Carrington... Between Two Beers has produced countless hours of incredible stories, career highs, lows and moments of raw vulnerability. And it’s only the beginning."
}
const Āio: Podcast = {
  title: 'Āio',
  image: 'Āio.jpg',
  links: [{
    link: 'https://www.aiothepodcast.com/',
    type: 'website'
  }, {
    type: 'apple',
    link: 'https://podcasts.apple.com/nz/podcast/%C4%81io-a-road-to-peace/id1633753649'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/7fdanT8RFbVjHUYJt2wzyC'
  }],
  description: "Welcome to Āio: A Road to Peace — a sanctuary for deep, soulful conversations at the intersection of indigenous wisdom, holistic health, and spiritual embodiment. Hosted by Tarikura Kapea (Te Ati Awa, Te Ati Haunui-a-Pāpārangi, Ngāti Apa), this award-winning podcast is rooted in the rich soil of Aotearoa New Zealand. Each episode offers a powerful kōrero (conversation) with healers, artists, thought leaders, and cultural practitioners who are reshaping the future of wellness. Together, we explore what it truly means to be well — in body, mind, wairua (spirit), and whenua (land). Guests share practical tools, ancient systems, and embodied practices to help you reclaim your sovereignty, nurture your nervous system, and become your own healer. \"Āio\" is a Māori word for peace, calm, and tranquility — and this podcast is here to help you define what peace means for you, access deeper states of balance, and live in harmony with your truth. Whether you're walking the path of decolonising wellness, reconnecting to your cultural identity, or simply longing for more presence and groundedness — this is the place for you."
}
const TheMorningRumble: Podcast = {
  title: 'The Morning Rumble Podcast',
  image: 'TheMorningRumble.jpg',
  links: [{
    link: 'https://www.rova.nz/podcasts/the-morning-rumble-podcast',
    type: 'website'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/the-morning-rumble/id380627890',
    type: 'apple'
  }, {
    link: 'https://open.spotify.com/show/22cgf9Wkz4v9GiiuslkuT7',
    type: 'spotify'
  }],
  description: "If you like hard hitting news and informative talk... then listen to something else. But if you're after plenty of laughs, in-fighting and a whole lot of piss-taking, then catch up on the best bits from The Morning Rumble's daily breakfast show on The Rock."
}
const YarnswithAndy: Podcast = {
  title: 'Yarns with Andy',
  image: 'YarnswithAndy.jpg',
  links: [{
    link: 'https://www.youtube.com/@yarnswithandy',
    type: 'youtube'
  }, {
    link: 'https://open.spotify.com/show/4fXet3Qt43647NipxAWxkG',
    type: 'spotify'
  }],
  description: "New Zealand's first ever Construction focused podcast is here! This podcast is going to be all about trying to uncover the key challenges the construction industry is facing. We do things differently here in NZ."
}
const WitiUnderwater: Podcast = {
  title: 'Witi Underwater',
  image: 'WitiUnderwater.jpg',
  links: [{
    link: 'https://www.rnz.co.nz/podcast/witi-underwater',
    type: 'website'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/witi-underwater/id1819854769',
    type: 'apple'
  }, {
    type: 'spotify',
    link: ''
  }],
  description: "Whale Rider creator Witi Ihimaera throws himself in the deep end of a full-immersion Māori language course that tests him to his limit."
}
const WhatALad: Podcast = {
  title: 'What A Lad',
  image: 'WhataLad.jpg',
  links: [{
    link: 'https://www.whatalad.com/',
    type: 'website'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/what-a-lad/id1516582816',
    type: 'apple'
  }, {
    type: 'spotify',
    link: ''
  }],
  description: "What a Lad is a podcast by James Marshall who talks to some of the biggest names and best lads on the planet. "
}
const FullCredit: Podcast = {
  title: 'Full Credit',
  image: 'FullCredit.jpg',
  links: [{
    link: 'https://open.spotify.com/show/2kvhhJwDxqzfCYc0JehVN2',
    type: 'spotify'
  }, {
    link: 'https://feeds.acast.com/public/shows/full-credit',
    type: 'website'
  }],
  description: "Les and Alice live for women's rugby and know it's about time our community got the coverage we deserve. Former Black Fern captain Les Elder and sports journalist Alice Soper are teaming up to make sure women's rugby gets full credit. With fifty years of footy between them, there's no one better placed to be your guide to all the action on the march towards Rugby World Cup 2025. The inaugural Super Rugby Aupiki Championship captain and 2024 Best Sport Podcast host are taking the analysis out of their DMs and into your ears. Unpacking all the intrigue, key moments and players so you know exactly what to be watching for. Join them each Monday to ensure our women get Full Credit."
}
const TheFlood: Podcast = {
  title: 'The Flood',
  image: 'TheFlood.jpg',
  links: [{
    link: 'https://podcasts.apple.com/nz/podcast/the-flood/id1828037765',
    type: 'apple'
  }, {
    link: 'https://open.spotify.com/show/2kXTtOvqKtyJw1CQ5UwFCm',
    type: 'spotify'
  }],
  description: "On valentine’s day, Feb 14th 2023, Cyclone Gabrielle ripped through New Zealand, devastating the Hawkes Bay region with unprecedented flooding and destruction. In this 7-Part Mini series, you're going to hear first-hand accounts of what it was like to live through that experience - from those who did."
}
const PeoplePlanetFoodScigest: Podcast = {
  title: 'People | Planet | Food – Scigest',
  image: 'PeoplePlanetFoodScigest.jpg',
  links: [{
    link: 'https://www.plantandfood.com/en-nz/people-planet-food',
    type: 'website'
  }, {
    link: 'https://www.youtube.com/playlist?list=PL9HvB1TN2_azrchzQv1iZ33RNWdicKZdv',
    type: 'youtube'
  }],
  description: "Dr Roger Robson-Williams is Chief Sustainability Officer at the Bioeconomy Science Institute in New Zealand. An experienced plant scientist and research leader, he now oversees the delivery of Bioeconomy Science Institute's sustainability agenda, helping the Institute and its scientists to meet their sustainability goals while supporting partner organisations to do the same. Through his role, he meets lots of interesting people working in different ways to ensure food production globally not only delivers nutrition for people but is also sustainable for our planet. This Scigest series features conversations with some of these people on aspects of food production that you might not have considered before."
}
const TuneintoNaturewithKarthic: Podcast = {
  title: 'Tune into Nature with Karthic',
  image: 'TuneintoNaturewithKarthic.jpg',
  links: [{
    link: 'https://www.karthicss.com/podcast',
    type: 'website'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/tune-into-nature-with-karthic/id1582612260',
    type: 'apple'
  }],
  description: "Refreshing Nature Sounds & Stories from the Wilderness. Wildlife conservation stories with an interlude of nature sounds recorded in Aotearoa New Zealand's wild places."
}
const TheBoyintheWater: Podcast = {
  title: 'The Boy in the Water',
  image: 'TheBoyintheWater.jpg',
  links: [{
    link: 'https://podcasts.apple.com/nz/podcast/delve/id1691056155',
    type: 'apple'
  }],
  description: "Melanie Reid's chart topping podcast takes you inside a small town harbouring a big mystery. After the lifeless body of three-year-old Lachie Jones is found floating in an oxidation pond in the Southland town of Gore, police rule his death a tragic accident. But nothing is what it seems. Melanie has spent three years covering this case, revealing multiple flaws in the police investigation and uncovering new evidence that casts serious doubt about the circumstances surrounding Lachie’s death. In The Boy in the Water, Melanie unravels the case – and the secrets – in an attempt to find out what really happened to little Lachie Jones."
}
const TheArtfulDodger: Podcast = {
  title: 'The Artful Dodger',
  image: 'TheArtfulDodger.jpg',
  links: [{
    link: 'https://open.spotify.com/show/5aGwN47ErW2lTTW23Mfg9G',
    type: 'spotify'
  }],
  description: "Once the most revered philanthropist in New Zealand arts, James Wallace’s world started crumbling when a young man accused him of sexual assault. After the emergence of more victims and a six-year legal battle, Wallace was convicted of multiple crimes, no longer able to keep name suppression and stripped of his knighthood. The case raised major legal questions about the justice system, its treatment of abuse victims and name suppression laws. It also forced the arts sector to examine whether it had turned a blind eye to Wallace’s offending, in return for millions of dollars worth of patronage. Featuring new in-depth interviews, including Wallace’s only media interview since conviction, this is the story of his rise and fall, crimes and punishment - and his survivors."
}
const ThatsJustCriminal: Podcast = {
  title: 'That’s Just Criminal',
  image: 'ThatsJustCriminal.jpg',
  links: [{
    link: 'https://thats-just-criminal.captivate.fm/',
    type: 'website'
  }, {
    link: 'https://open.spotify.com/show/64vXKFxggrKAKB2j6Zld67',
    type: 'spotify'
  }],
  description: "Barristers Annabel Cresswell and Sumudu Thode will bring you insight from some of the most highly regarded criminal minds across both New Zealand and the globe - as they discuss the criminal law issues of the day, and the clients and cases they defend. Criminal law is interesting, diverse, and challenging. The role of criminal lawyers is to uphold our justice system by ensuring that every defendant is delivered the right to legal representation and a fair trial. In addition to providing insight for the public, the podcast aims to create a community for those working in criminal law - one that recognises just how isolating it is to be the person standing up in court alone."
}
const BHNBigHairyNews: Podcast = {
  title: '#BHN Big Hairy News',
  image: 'BHNBigHairyNews.jpg',
  links: [{
    link: 'https://bhn.nz/shows/big-hairy-news/',
    type: 'website'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/bhn-big-hairy-news/id1629215711',
    type: 'apple'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/230NX9TPkBCsIdTu4Y8fIt'
  }],
  description: "Award winning podcasters Pat and Chewie host a news commentary show that is broadcast weekdays. Big Hairy News, or #BHN, gives the space needed to cover off the stories covered rather than the two and a half minutes the mainstream media gives guests between weather and the next ad break."
}
const TheHappySaver: Podcast = {
  title: 'The Happy Saver',
  image: 'TheHappySaver.jpg',
  links: [{
    link: 'https://www.thehappysaver.com/podcast',
    type: 'website'
  }, {
    link: 'https://podcasts.apple.com/nz/podcast/the-happy-saver-podcast-personal-finance-in-new-zealand/id1297734152',
    type: 'apple'
  }, {
    type: 'spotify',
    link: 'https://open.spotify.com/show/6bdJFBKf3lg3CudD78NH2X'
  }],
  description: "Your friends might not want to talk about money, but I do! Hi, I’m Ruth and I’m a blogger on Personal Finance and in this podcast I tell the stories of Kiwis and their experiences with the money in their lives. How do they use it or how does it use them? Where do they save and invest it and does it work? What are their financial triumphs and financial train wrecks? How can you extract the most out of life and spend as little as possible while doing it? Join me as I ask the questions everyone else is too polite to ask but is dying to know about New Zealanders and their money. Happy Saving! Ruth"
}
const PaulTheOtherOnePodcast: Podcast = {
  title: 'Paul… The Other One Podcast',
  image: 'PaulTheOtherOnePodcast.jpg',
  links: [{
    link: 'https://open.spotify.com/show/2nc2IdYvKltOZQRXra3hFG',
    type: 'spotify'
  }, {
    link: 'https://paultheotherone.com/',
    type: 'website'
  }],
  description: "An Award Winning Podcaster - Letting the truth ruin a good story... Former political commentator with a background in media studies and pop culture, Paul has over 35000 followers of his content from across Aotearoa. This content is also available in video formats in fact it probably makes more sense in video - on Tik Tok, YouTube, Facebook & Instagram as well as audio versions where ever you get your Podcasts from - all linked in my bio, along with the free weekly Paul… The Other One Newsletter."
}

const TheSpinoff: Network = {
  name: 'The Spinoff',
  link: 'https://thespinoff.co.nz/'
}
const FrankPodcasts: Network = {
  name: 'Frank Podcasts',
  link: 'https://www.frankpodcasts.nz/'
   }
const BHN: Network = {
  name: 'BHN',
  link: 'https://bhn.nz/'
}



// 2025 
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
      name: "Judges' Picks",
      p1: Interconnector,
      p2: TheArtfulDodger,
      p3: ThatsJustCriminal
    },
    {
      name: "Listeners' Choice Award",
      p1: BHNBigHairyNews,
      p2: TheHappySaver,
      p3: PaulTheOtherOnePodcast,
      sponsor: "Acast"
    }
  ]
}
