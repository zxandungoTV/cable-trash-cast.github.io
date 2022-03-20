import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css']
})
export class MembersPageComponent implements OnInit {

  membersJson = [
    {
      name: 'Occult Tooner',
      links: {
        twitter: 'https://twitter.com/OccultTooner',
        instagram: 'https://www.instagram.com/occulttooner/',
        youtube: 'https://www.youtube.com/channel/UCaCGuMPpEL-nP_BfiAF8_0A',
        twitch: 'https://www.twitch.tv/occulttooner',
      },
      image: '~../../assets/images/cast/toonerTransperantt.png',
      role: 'Podcast Member'
    },
    {
      name: 'Pale Iguana',
      links: {
        twitter: 'https://twitter.com/TheAquaticBunny?s=09',
        instagram: 'https://www.instagram.com/theaquaticbunny',
        kofi: 'https://ko-fi.com/paleiguana',
        redbuble: 'https://www.redbubble.com/people/theaquaticbunny/shop',
      },
      image: '~../../assets/images/cast/paleTransperantt.png',
      role: 'Podcast Member'
    },
    {
      name: 'Alex The Menace',
      links: {
        twitter: 'https://twitter.com/AlexThe1Menace?s=09',
        youtube: 'https://youtube.com/c/AlexTheMenace3',
      },
      image: '~../../assets/images/cast/alexTransperantt.png',
      role: 'Podcast Member'
    },
    {
      name: 'Alex Likes Toons',
      links: {
        twitter: 'https://twitter.com/AlexLikesToons',
        youtube: 'https://www.youtube.com/c/AlexLikesToons',
        twitch: 'https://www.twitch.tv/alexlikestoons',
      },
      image: '~../../assets/images/cast/alex2Transperantt.png',
      role: 'Podcast Member'
    },
    {
      name: 'Royal Foil',
      links: { instagram: 'https://www.instagram.com/real_royal_foil01/', soundcloud: '#' },
      image: '~../../assets/images/bebopHill.png',
      role: 'Podcast Member'
    },
    {
      name: 'Holoslair',
      links: {  },
      image: '~../../assets/images/bebopHill.png',
      role: 'Podcast Member'
    },
    {
      name: 'Jacob the dragon',
      links: { },
      image: '~../../assets/images/bebopHill.png',
      role: 'Podcast Member'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
