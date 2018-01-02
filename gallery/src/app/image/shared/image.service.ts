// our first and only service in this simple gallery application
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService{
  // defining what this image service does or methods on it	
  visibleImages = [];
  getImages(){
  	return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number){
  	return IMAGES.slice(0).find(image => image.id == id)
  }
}

const IMAGES = [
  {"id": 1, "category": "boats-on-ocean", "caption": "animation of a boring boat doing what it was made for ", "url": "https://kids.baps.org/storytime/photo/boatintheocean01.jpg"},
  {"id": 2, "category": "boats-on-ocean", "caption": "drawing of a boring boat doing what it was made for", "url": "http://vignette3.wikia.nocookie.net/phineasandferb/images/9/9c/Boat_on_the_ocean.jpg/revision/latest?cb=20101010181320"},
  {"id": 3, "category": "boats-on-ocean", "caption": "boring boat doing what it was made for", "url": "https://userscontent2.emaze.com/images/b53aa371-938f-49e9-89a9-91f0ca489f2e/40e56306-8232-4b5f-8da9-d7a86bbe7d45.jpg"},
  {"id": 4, "category": "boats-on-mountain", "caption": "Daylight freezes magic manikins in mist of mayham", "url": "http://dpete13.files.wordpress.com/2010/06/boat-in-a-tree2.jpg"},
  {"id": 5, "category": "boats-on-mountain", "caption": "Tree Grows a Boat and Ironic Sense of Humor", "url": "https://juicebar.files.wordpress.com/2006/12/boat_on_tree_dunalley.jpg"},
  {"id": 6, "category": "boats-on-mountain", "caption": "House Boat Technology at its Finest", "url": "https://weburbanist.com/wp-content/uploads/2010/12/House-Boats-House.gif"},
  {"id": 7, "category": "boats-on-mountain", "caption": "Really Cool Looking Boat Sitting infront of a Mountain", "url": "http://www.lucianniculescu.com/wp-content/photo/2016/12/Sailing-Boat-on-Land-Turkey-Lucian-Niculescu-06-1280x848.jpg"},
  {"id": 8, "category": "boats-on-mountain", "caption": "Movie that Mentions Boats on Land", "url": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1487669288i/34363961._UY200_.jpg"},
  {"id": 9, "category": "boat-cars", "caption": "Man Happy To Find A Road In Unsinkable Boat Car", "url": "http://images.car.bauercdn.com/pagefiles/13432/1040x0/4-amphicar.jpg?scale=down"},
  {"id": 10, "category": "boat-cars", "caption": "Modern Day Pirate on Route to Get Some Booty", "url": "https://1funny.com/wp-content/uploads/2012/04/boat-on-road.jpg"},
  {"id": 11, "category": "boat-cars", "caption": "Super Sweet Boat Car Races Dolphin In Friendly Wagier", "url": "http://i.dailymail.co.uk/i/pix/2014/10/29/1414580788539_Image_galleryImage__Video_Available_LOCATION.JPG"},
  {"id": 12, "category": "boat-bikes", "caption": "Lacking Strip Malls and Paved Roads Man's Love for Bikes Flows Through", "url": "https://s-media-cache-ak0.pinimg.com/originals/15/f5/72/15f572445c64325f309cf0168d2ae1be.jpg"},
  {"id": 13, "category": "boat-bikes", "caption": "adrenaline junkie on a peddle speed boat", "url": "http://i.dailymail.co.uk/i/pix/2014/09/03/1409741610291_wps_30_Cycling_fanatics_will_be_.jpg"},
  {"id": 14, "category": "boat-bikes", "caption": "single dad trying to escape his responsibilities on a rad boatcycle", "url": "http://cdn.hiconsumption.com/wp-content/uploads/2013/07/Shuttle-Bike-1.jpg"},
  {"id": 15, "category": "boat-tattoo", "caption": "Elegantly simply sail boat tattoo with gently waves crecendoing beneath", "url": "https://s-media-cache-ak0.pinimg.com/originals/93/f8/ea/93f8ea1297d6aaf9f5c4e0d54c1532b8.jpg"},
  {"id": 16, "category": "boat-tattoo", "caption": "Tattoo rendering of Cat Sparrow and his trusty black milk vessel", "url": "http://www.tattoosera.com/wp-content/uploads/2016/04/Boat-Tattoo-Designs-20.jpg"},
  {"id": 17, "category": "boat-tattoo", "caption": "unbelievable sunken treasure tat on the round mound of a sailors back", "url": "http://paintthetownbodyart.com/wp-content/uploads/Nautical-Compass-Tattoo-On-Hand-4.jpg"}
]