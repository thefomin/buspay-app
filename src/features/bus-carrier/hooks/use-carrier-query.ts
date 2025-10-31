import { CONFIG_ENV } from "@/shared/config/env"
import type { TicketResponse } from "@/shared/types/responses.type"
import { useEffect, useState } from "react"

interface CarrierState {
	data: TicketResponse | null
	loading: boolean
	error: string | null
}

export const useCarrierQuery = (code: string) => {
	const [carrierQuery, setCarrierQuery] = useState<CarrierState>({
		data: null,
		loading: false,
		error: null,
	})

	useEffect(() => {
		if (!code) return
		const abortController = new AbortController()

		const fetchCarrier = async () => {
			setCarrierQuery((prev) => ({ ...prev, loading: true, error: null }))

			try {
				const response = await fetch(CONFIG_ENV.API_TICKET_URL + code, {
					signal: abortController.signal,
				})
				if (!response.ok) throw new Error("Билет не найден")

				const data = await response.json()
				setCarrierQuery({ data, loading: false, error: null })
			} catch (err: any) {
				if (err.name === "AbortError") return
				setCarrierQuery({ data: null, loading: false, error: err.message })
			}
		}

		fetchCarrier()

		return () => {
			abortController.abort()
		}
	}, [code])

	return {
		data: carrierQuery.data,
		loading: carrierQuery.loading,
		error: carrierQuery.error,
	}
}
