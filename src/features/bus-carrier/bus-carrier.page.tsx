import { Bus, User, Cable as Ruble } from "lucide-react"
import { useCallback, useState } from "react"
import { BusCarrierLayout, InfoRow, TicketQuantity } from "./ui"
import { MainButton } from "@/shared/ui/telegram/main-button"
import { BackButton } from "@/shared/ui/telegram/back-button"
import { useNavigate, useParams } from "react-router-dom"
import { useCarrierQuery } from "./hooks/use-carrier-query"
import { Loading } from "@/shared/ui/kit"
import { usePayment, type PaymentDto } from "./hooks/use-payment"
import { useTelegram } from "@/shared/providers/telegram-provider"
import { CONFIG_ENV } from "@/shared/config/env"

const BusCarrierPage = () => {
	const params = useParams<{ carrierId: string }>()
	const carrierId = params.carrierId || ""
	const { data, loading, error } = useCarrierQuery(carrierId)

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
			code: carrierId,
			amount: totalPrice,
			telegramUser: telegramState.isApp
				? telegramState.app?.initDataUnsafe.user.username
				: CONFIG_ENV.DEV_TG_ID,
			chatId: telegramState.isApp
				? telegramState.app?.initDataUnsafe.user.username
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
						{data && (
							<>
								<InfoRow
									icon={<User className="w-6 h-6" />}
									label="Перевозчик"
									value={data.carrier}
								/>
								<InfoRow
									icon={<Bus className="w-6 h-6" />}
									label={`${data.busNumber}, ${data.route}`}
									value={data.regNumber}
								/>
								<InfoRow
									icon={<Ruble className="w-6 h-6" />}
									label="Тариф"
									value={`Полный - ${data.price.toFixed(2)} ₽`}
								/>
							</>
						)}
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
