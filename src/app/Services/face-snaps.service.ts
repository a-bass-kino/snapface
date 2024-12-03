import { SnapType } from './../Models/snap-type.type';
import { Injectable } from "@angular/core";
import { FaceSnap } from "../Models/snap-face";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [ 
        new FaceSnap(
          'Archibald',
          'Mon meilleur ami depuis toujours !',
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          new Date(),
          13
        ).withLocation('Toulouse'),
        new FaceSnap(
          'Three Rock Mountain',
          'Un endroit magnifique pour les randonnées.',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          new Date(),
          6
        ).withLocation('München'),
        new FaceSnap(
          'Un bon repas',
          'Mmmh que c\'est bon !',
          'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          new Date(),
          156
        )
    ];

    getFaceSnaps(): FaceSnap[] {
      return [...this.faceSnaps];
    }
    
    getFaceSnapById(faceSnapId: string): FaceSnap {
      const foundFaceSnap : FaceSnap | undefined = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      
      if (!foundFaceSnap) {
        throw new Error('not found');
      }

      return foundFaceSnap;
    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const foundFaceSnap : FaceSnap | undefined = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

        if (!foundFaceSnap) {
            throw new Error('not found');
        }
        
        foundFaceSnap.snap(snapType);
    }
}