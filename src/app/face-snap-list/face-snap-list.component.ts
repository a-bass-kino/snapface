import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/snap-face';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../Services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
   mySnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.mySnaps = this.faceSnapsService.getFaceSnaps();
  }
}
