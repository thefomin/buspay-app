export function formatDate(dateString: string) {
	return new Date(dateString).toLocaleDateString("ru-RU", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	})
}

export function formatTime(dateString: string) {
	return new Date(dateString).toLocaleTimeString("ru-RU", {
		hour: "2-digit",
		minute: "2-digit",
	})
}
