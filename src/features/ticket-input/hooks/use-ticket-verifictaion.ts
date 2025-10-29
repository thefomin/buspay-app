import { CONFIG_ENV } from "@/shared/config/env"
import { useNavigate } from "react-router-dom"

interface TicketResponse {
	code: string // уникальный код билета
	carrier?: string // перевозчик
	busNumber?: string // номер автобуса
	route?: string // "Точка A — Точка B"
	regNumber?: string // гос. номер транспорта
	price?: number // тариф
}

export const useTicketVerification = () => {
	const navigate = useNavigate()
	const ticketVerify = async (code: string): Promise<void> => {
		const response = await fetch(CONFIG_ENV.API_TICKET_URL + code, {
			method: "GET",
		})

		if (!response.ok) {
			alert("Билет не найден")
			return
		}

		const data: TicketResponse = await response.json()
		if (data) {
			navigate(`/carrier/${data.code}`)
		}
	}

	return { ticketVerify }
}
