interface TelegramTheme {
	bg_color: string
	text_color: string
	hint_color: string
	link_color: string
	button_color: string
	button_text_color: string
	secondary_bg_color: string
	header_bg_color: string
	accent_text_color: string
	section_bg_color: string
	section_header_text_color: string
	section_separator_color: string
	subtitle_text_color: string
	destructive_text_color: string
}

interface WebAppUser {
	id: number
	is_bot: boolean
	first_name: string
	last_name: string
	username: string
	is_premium: boolean
	photo_url: string
}

interface WebappData {
	user: WebAppUser
}

interface TelegramHapticFeedback {
	impactOccurred: (
		style: "light" | "medium" | "rigid" | "heavy" | "soft"
	) => void
	notificationOccurred: (type: "error" | "success" | "warning") => void
}

interface TelegramWebapp {
	initData: string
	initDataUnsafe: WebappData
	version: string
	platform: string
	themeParams: TelegramTheme
	headerColor: string
	backgroundColor: string
	expand: () => void
	close: () => void
	HapticFeedback: TelegramHapticFeedback
	MainButton: MainButton
	BackButton: BackButton
	showScanQrPopup: (
		options?: ShowScanQrPopupOptions,
		callback?: ShowScanQrPopupCallback
	) => void
}

interface Window {
	Telegram?: {
		WebApp: TelegramWebapp
	}
}

interface MainButton {
	text?: string
	color?: string
	textColor?: string
	disabled?: boolean
	progress?: boolean

	show: () => void
	hide: () => void
	onClick: (callback: () => void) => void
	offClick: (callback: () => void) => void
	setText: (text: string) => void
	setColor: (color: string) => void
	setTextColor: (color: string) => void
	setParams: (params: Partial<TelegramTheme>) => void
}

interface BackButton {
	show: () => void
	hide: () => void
	onClick: (callback: () => void) => void
	offClick: (callback: () => void) => void
}

interface ShowScanQrPopupOptions {
	text?: string // текст-подсказка под заголовком Scan QR
}

// функция обратного вызова, возвращает boolean, чтобы закрыть сканер
type ShowScanQrPopupCallback = (data: string) => boolean
