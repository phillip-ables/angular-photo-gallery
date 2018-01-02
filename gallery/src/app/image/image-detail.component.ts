import { Component } from '@angular/core';
import { ImageService } from './shared/image.service'

@Component ({
	selector: 'app-image-detail',
	templateUrl: './image-detail.component.html',
	styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent {
	// create an image service that is going to get injected into that service into the vector of this image class
	constructor(private imageService: ImageService)

	title = 'ImageDetail';
};