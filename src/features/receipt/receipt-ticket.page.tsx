import { useParams } from "react-router-dom"

import { BackButton, MainButton } from "@/shared/ui/telegram"
import { useHandleBack } from "@/shared/hooks/useHandleBack"
import { Loading } from "@/shared/ui/kit"
import { type PathParams, ROUTES } from "@/shared/config"

import { useReceiptQuery } from "./hooks/useReceiptQuery"

import { ReceiptDetails } from "./ui/receipt-details"
import { ReceiptTicketLayout } from "./ui/receipt-ticket-layout"
import { useTelegram } from "@/shared/providers/telegram-provider"

const ReceiptTicket = () => {
	const { telegramState } = useTelegram()
	const params = useParams<PathParams[typeof ROUTES.RECEIPT]>()
	const { data, loading, error } = useReceiptQuery(params.receiptId || "")
	const handleBack = useHandleBack()

	const handleClose = () => {
		if (telegramState.isApp) {
			telegramState.app?.close()
		} else {
			alert("Кнопка работает только для TWA")
		}
	}
	return (
		<>
			<BackButton onClick={handleBack} text="Назад" />
			<ReceiptTicketLayout
				title="Квитанция о покупке"
				receipt={
					<>
						{error && (
							<div className="text-red-500 mb-2 flex items-center justify-center min-h-[50vh]">
								Ошибка: {error}
							</div>
						)}
						{loading && (
							<div className="flex items-center justify-center min-h-[50vh]">
								<Loading />
							</div>
						)}
						{data && <ReceiptDetails data={data} />}
					</>
				}
			/>
			{data && <MainButton text="ЗАКРЫТЬ" onClick={handleClose} />}
		</>
	)
}

export const Component = ReceiptTicket
