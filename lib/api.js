// >> Script
export async function fetcher(url, options = {}) {
	let response;
	if (!options) {
		try {
			response = (await fetch(url)) || false;
		} catch (error) {
			response = false;
		}
	} else {
		try {
			response = (await fetch(url, options)) || false;
		} catch (error) {
			response = false;
		}
	}

	if (response) {
		const data = await response.json();
		return data;
	}
	return false;
}
