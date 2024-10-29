import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from '../tweet/tweet.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, TweetComponent],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  tweets = [
    { user: 'John Doe', content: 'Hello World!', timestamp: '1m ago' },
    { user: 'Jane Smith', content: 'Great day today.', timestamp: '5m ago' },
    { user: 'Alice Johnson', content: 'Angular is awesome!', timestamp: '10m ago' }
  ];
}
