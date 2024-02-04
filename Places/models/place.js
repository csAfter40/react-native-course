class Place {
	static nextId = 1;
	constructor(title, imageUri, address, location) {
		this.id = Place.nextId++;
		this.title = title;
		this.imageUri = imageUri;
		this.address = address;
		this.location = location; // {lat: 12.234, lng: 34.23423}
	}
}

export default Place;
