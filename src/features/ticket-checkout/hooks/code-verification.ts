import { useState } from "react"
import { fakeTickets, type Ticket } from "../config/faketicket"
import { useNavigate } from "react-router-dom"

export const useTicketVerification = () => {
	const [ticket, setTicket] = useState<Ticket | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const verifyTicket = (code: string) => {
		setLoading(true)
		setError(null)
		setTicket(null)

		// симуляция асинхронного запроса
		setTimeout(() => {
			const found = fakeTickets.find((t) => t.code === code)
			if (found) {
				setTicket(found)
				navigate(`/carrier/${found.code}`)
			} else {
				setError("Билет с таким кодом не найден")
				alert("Билет с таким кодом не найден")
			}
			setLoading(false)
		}, 500)
	}

	return { ticket, error, loading, verifyTicket }
}
