import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/snap-face';
import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { FaceSnapsService } from '../Services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    DatePipe
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

  snapface!: FaceSnap;
  snapText!:string;
  userHasSnapped!:boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute ) { }

  ngOnInit() : void {
    this.prepareInterface();

    this.getFaceSnap();
  }

  onAddSnap() : void {
    if ( ! this.userHasSnapped) {
      this.snap()
    }
    else {
      this.unSnap();
    }
  }

  snap() : void {
    this.faceSnapsService.snapFaceSnapById(this.snapface.id, 'unsnap');
    this.userHasSnapped = true;
    this.snapText = "Oops, un Snap!"
  }

  unSnap() : void {
    this.faceSnapsService.snapFaceSnapById(this.snapface.id, 'snap');
    this.userHasSnapped = false;
    this.snapText = "Oh Snap!"
  }

  private prepareInterface() {
    this.userHasSnapped = false;
    this.snapText = "Oh Snap!";
  }

  private getFaceSnap() {
    const snapfaceId = this.route.snapshot.params['id'];
    this.snapface = this.faceSnapsService.getFaceSnapById(snapfaceId);
  }

}
