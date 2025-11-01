import { useState } from "react"
import { useTelegram } from "@/shared/providers/telegram-provider"
import { useTicketVerification } from "./use-ticket-verification"

export const useTicketInput = () => {
	const { telegramState } = useTelegram()
	const [digits, setDigits] = useState("")
	const { ticketVerify } = useTicketVerification()

	const handleDigitClick = (digit: number) => {
		if (digits.length >= 6) return

		telegramState.app?.HapticFeedback.impactOccurred("light")
		const newDigits = digits + digit
		setDigits(newDigits)
		if (newDigits.length === 6) ticketVerify(newDigits)
	}

	const handleBackspace = () => {
		if (digits.length === 0) return

		telegramState.app?.HapticFeedback.impactOccurred("heavy")
		setDigits((prev) => prev.slice(0, -1))
	}

	const handleQrScan = () => {
		if (!telegramState.isApp || !telegramState.app) return
		telegramState.app.showScanQrPopup(
			{ text: "Отсканируйте QR код 🎟️" },
			(data) => {
				const sanitized = data.replace(/\D/g, "").slice(0, 6)
				setDigits(sanitized)
				ticketVerify(sanitized)
				return true
			}
		)
	}

	return {
		digits,
		handleDigitClick,
		handleBackspace,
		handleQrScan,
	}
}
