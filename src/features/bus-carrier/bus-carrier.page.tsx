import { useCallback, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useTelegram } from "@/shared/providers/telegram-provider"
import { CONFIG_ENV } from "@/shared/config/env"

import { Loading } from "@/shared/ui/kit"
import { MainButton } from "@/shared/ui/telegram/main-button"
import { BackButton } from "@/shared/ui/telegram/back-button"

import { BusCarrierLayout, TicketQuantity } from "./ui"
import { useCarrierQuery } from "./hooks/use-carrier-query"
import { usePayment, type PaymentDto } from "./hooks/use-payment"
import { CarrierDetails } from "./ui/carrier-details"
import type { PathParams, ROUTES } from "@/shared/config"

const BusCarrierPage = () => {
	const params = useParams<PathParams[typeof ROUTES.CARRIER]>()
	const { data, loading, error } = useCarrierQuery(params.carrierId || "")

	const [ticketCount, setTicketCount] = useState(1)
	const [ticketPrice] = useState(data?.price || 48)
	const totalPrice = ticketCount * ticketPrice

	const { telegramState } = useTelegram()
	const { ticketPayment } = usePayment()
	const navigate = useNavigate()

	//ставим useCallback чтобы кнопка "назад" не ре-рендерилась каждый раз после изменения состояния
	//получается, мы обернули функцию в калбек и теперь у нас onClick в BackButton не будет ре-рендерится
	const handleBack = useCallback(() => {
		navigate("/")
	}, [])

	const handlePayment = () => {
		const data: PaymentDto = {
			code: params.carrierId || "",
			amount: totalPrice,
			telegramUser: telegramState.isApp
				? telegramState.app?.initDataUnsafe.user.username
				: CONFIG_ENV.DEV_TG_ID,
			chatId: telegramState.isApp
				? telegramState.app?.initDataUnsafe.user.id
				: CONFIG_ENV.DEV_TG_ID,
		}
		ticketPayment(data)
	}

	return (
		<>
			<BackButton onClick={handleBack} text="Назад" />
			<BusCarrierLayout
				title="Данные билета"
				quantity={
					<TicketQuantity
						title="Количество билетов"
						count={ticketCount}
						value={[ticketCount]}
						onValueChange={([val]) => setTicketCount(val)}
						disabled={!data && !!error && !loading}
					/>
				}
				info={
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
						{data && <CarrierDetails data={data} />}
					</>
				}
			/>
			{data && (
				<MainButton
					text={`ОПЛАТИТЬ - ${totalPrice.toFixed(2)} ₽`}
					onClick={handlePayment}
				/>
			)}
		</>
	)
}

export const Component = BusCarrierPage
