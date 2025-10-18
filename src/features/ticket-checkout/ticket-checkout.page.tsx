import { useTelegram } from "@/shared/providers/telegram-provider"

import { useState } from "react"

import { DigitsKeyboard, TicketDigits, TicketCheckoutLayout } from "./ui"

const TicketCheckoutPage = () => {
	const { telegramState } = useTelegram()
	const [digits, setDigits] = useState<string>("")

	const handleDigitClick = (digit: number) => {
		if (digits.length >= 6) return

		if (telegramState.app) {
			telegramState.app.HapticFeedback.impactOccurred("light")
		}
		setDigits((prev) => prev + digit)
	}

	const handleBackspace = () => {
		if (digits.length === 0) return

		if (telegramState.isApp && telegramState.app) {
			telegramState.app.HapticFeedback.impactOccurred("heavy")
		}
		setDigits((prev) => prev.slice(0, -1))
	}

	const handleQrScan = () => {
		if (telegramState.isApp && telegramState.app) {
			telegramState.app.showScanQrPopup(
				{ text: "Отсканируйте QR код 🎟️" },
				(data) => {
					setDigits(data.replace(/\D/g, "").slice(0, 6))
					return true
				}
			)
		}
	}

	return (
		<TicketCheckoutLayout
			digits={<TicketDigits digits={digits} />}
			keyboard={
				<DigitsKeyboard
					digitsLength={digits.length}
					onDigitClick={handleDigitClick}
					onBackspace={handleBackspace}
					onQrScan={handleQrScan}
				/>
			}
		/>
	)
}

export const Component = TicketCheckoutPage
