import { Bus, User, Cable as Ruble } from "lucide-react"
import { useCallback, useState } from "react"
import { BusCarrierLayout, InfoRow, TicketQuantity } from "./ui"
import { MainButton } from "@/shared/ui/telegram/main-button"
import { BackButton } from "@/shared/ui/telegram/back-button"
import { useNavigate } from "react-router-dom"

const BusCarrierPage = () => {
	const [ticketCount, setTicketCount] = useState(1)
	const [ticketPrice] = useState(48)
	const totalPrice = ticketCount * ticketPrice

	const navigate = useNavigate()
	//ставим useCallback чтобы кнопка "назад" не ре-рендерилась каждый раз после изменения состояния
	//получается, мы обернули функцию в калбек и теперь у нас onClick в BackButton не будет ре-рендерится
	const handleBack = useCallback(() => {
		navigate("/")
	}, [])
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
					/>
				}
				info={
					<>
						<InfoRow
							icon={<User className="w-6 h-6" />}
							label="Перевозчик"
							value='ООО "СКАД"'
						/>
						<InfoRow
							icon={<Bus className="w-6 h-6" />}
							label="З, Академгородок - а.вокз. Восточный"
							value="р465тм124"
						/>
						<InfoRow
							icon={<Ruble className="w-6 h-6" />}
							label="Тариф"
							value="Полный - 48.00 ₽"
						/>
					</>
				}
			/>
			<MainButton text={`ОПЛАТИТЬ - ${totalPrice.toFixed(2)} ₽`} />
		</>
	)
}

export const Component = BusCarrierPage
