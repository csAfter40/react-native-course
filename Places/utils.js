import { GOOGLE_MAPS_API_KEY } from "@env";

export function getMapUri(location) {
	const mapCenter = `${location.lat},${location.lng}`;

	return `https://maps.googleapis.com/maps/api/staticmap?center=${mapCenter}&zoom=12&size=400x400&markers=color:red%7C${mapCenter}&key=${GOOGLE_MAPS_API_KEY}`;
}
