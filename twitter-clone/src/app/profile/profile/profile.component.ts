import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from '../../feed/tweet/tweet.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, TweetComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  username = 'John Doe';
  handle = 'johndoe';
  userTweets = [
    { user: 'John Doe', content: 'Loving Angular!', timestamp: '1h ago' },
    { user: 'John Doe', content: 'Building a Twitter clone.', timestamp: '2h ago' }
  ];
}
