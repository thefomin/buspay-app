import { CONFIG_ENV } from "@/shared/config/env"
import type { ReceiptResponse } from "@/shared/types/responses.type"
import { useEffect, useState } from "react"

interface ReceiptState {
	data: ReceiptResponse | null
	loading: boolean
	error: string | null
}

export const useReceiptQuery = (receiptId: string) => {
	const [receiptQuery, setReceiptQuery] = useState<ReceiptState>({
		data: null,
		loading: false,
		error: null,
	})

	useEffect(() => {
		if (!receiptId) return
		const abortController = new AbortController()

		const fetchReceipt = async () => {
			setReceiptQuery((prev) => ({ ...prev, loading: true, error: null }))

			try {
				const response = await fetch(CONFIG_ENV.API_RECEIPT_URL + receiptId, {
					signal: abortController.signal,
				})
				if (!response.ok) throw new Error("Билет не найден")

				const data = await response.json()
				setReceiptQuery({ data, loading: false, error: null })
			} catch (err: any) {
				if (err.name === "AbortError") return
				setReceiptQuery({ data: null, loading: false, error: err.message })
			}
		}

		fetchReceipt()

		return () => {
			abortController.abort()
		}
	}, [receiptId])

	return {
		data: receiptQuery.data,
		loading: receiptQuery.loading,
		error: receiptQuery.error,
	}
}
