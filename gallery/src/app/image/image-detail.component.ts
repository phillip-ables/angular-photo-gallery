import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/image.service';

@Component ({
	selector: 'app-image-detail',
	templateUrl: './image-detail.component.html',
	styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent implements OnInit {
	// create an image service that is going to get injected into that service into the vector of this image class
	image:any
	constructor(private imageService: ImageService) { }

	ngOnInit(){
		this.image = this.imageService.getImage(
				+this.route.snapshot.params['id']
			)
	}
};