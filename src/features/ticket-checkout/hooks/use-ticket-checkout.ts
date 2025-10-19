// hooks/use-ticket-checkout.ts
import { useState } from "react"
import { useTelegram } from "@/shared/providers/telegram-provider"
import { useTicketVerification } from "./code-verification"

export const useTicketCheckout = () => {
	const { telegramState } = useTelegram()
	const [digits, setDigits] = useState("")
	const { verifyTicket, ticket, error, loading } = useTicketVerification()

	const handleDigitClick = (digit: number) => {
		if (digits.length >= 6) return

		telegramState.app?.HapticFeedback.impactOccurred("light")
		const newDigits = digits + digit
		setDigits(newDigits)
		if (newDigits.length === 6) verifyTicket(newDigits)
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
				verifyTicket(sanitized)
				return true
			}
		)
	}

	return {
		digits,
		ticket,
		error,
		loading,
		handleDigitClick,
		handleBackspace,
		handleQrScan,
	}
}
