export function isdigit(data: string): boolean {
	for (let i = 0; i < data.length; i++) {
		if (!/^\d$/.test(data[i])) {
			return false;
		}
	}
	return true;
}
