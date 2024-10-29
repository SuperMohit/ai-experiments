import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.scss'
})
export class TweetComponent {
  @Input() tweet: any;
}
