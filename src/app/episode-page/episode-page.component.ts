import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.css']
})
export class EpisodePageComponent implements OnInit {

  items = [
    {
      name: ' Ep(1) - "Stop Motion"',
      description: `Me and some buddies talk about stop motion stuff for a while.`,
      youtubeLink: this.dom.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/UuaypCQ1Bbc")
    },
    {
      name: 'Ep(2) - "Puppets"',
      description: `Me and some friends talking about puppet stuff for a few hours. Sorry for the bad audio quality on this one`,
      youtubeLink: this.dom.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/-N2_LHhYc4I")
    },
    {
      name: 'Ep(3) - "B - Movies"',
      description: `Talking about some of our favorite B movies, or at least the one we have seen.`,
      youtubeLink: this.dom.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/nYYDq8AwHVE")
    },
    {
      name: 'Ep(4) - "Live Action Cartoon Hybrids"',
      description: `On today episode the gang talks about movies that introduces the live world interacting with the cartoon one.`,
      youtubeLink: this.dom.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/rC6dhhde3vQ")
    },
  //new ones
    {
      name: 'ECable Trash Cast Ep(5) - "Adult Swim"',
      description: `Part 1 of an adult swim chat with a couple of friends. talking about their bumpers and some of their original shows.`,
      youtubeLink: this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5C9KaQMnAHg")
    },

    {
      name: 'Cable Trash Cast Ep(6) - "Adult Swim part 2 live action and syndicated"',
      description: `Part 2 of an adult swim chat with a couple of friends. talking about their live action and syndicated `,
      youtubeLink: this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/jBkweLkUOL0")
    },


    {
      name: 'Cable Trash Cast Ep(7) - "Childs Play Franchise"',
      description: `On this episode we just talk about the childs play movies for a bit. guest jacob the dragon`,
      youtubeLink: this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/GNGBXmveSrU")
    },

    {
      name: 'ECable Trash Cast Ep(8) - "Adult Swim- King of the Hill and Cowboy Bebop"',
      description: `on this episode the group chat about king of the hill and cowboy bebop for a while`,
      youtubeLink: this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/sgIaVFhooGc")
    },
  
  
  
  
  
  
  ];
  expandedIndex = 0;
  constructor(private dom: DomSanitizer) { }

  ngOnInit(): void {
  }

}
