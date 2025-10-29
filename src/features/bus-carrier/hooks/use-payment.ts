import { CONFIG_ENV } from "@/shared/config/url"
import { useNavigate } from "react-router-dom"

export interface PaymentDto {
	code: string
	amount: number
	telegramUser?: string
	chatId?: string
}

interface ReceiptResponse {
	id: string
	code: string
	amount: number
	paidAt: string
}

export const usePayment = () => {
	const navigate = useNavigate()
	const ticketPayment = async (body: PaymentDto): Promise<void> => {
		console.log("body payment" + JSON.stringify(body))
		const response = await fetch(CONFIG_ENV.API_PAYMENT_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})

		if (!response.ok) {
			alert("Ошибка при оплате")
			return
		}

		const data: ReceiptResponse = await response.json()
		if (data) {
			navigate(`/carrier/${data.code}`)
		}
	}

	return { ticketPayment }
}
