import type { TicketResponse } from "@/shared/types/responses.type"
import { InfoRow } from "@/shared/ui"
import { Bus, User, Cable as Ruble } from "lucide-react"

interface CarrierInfoProps {
	data: TicketResponse
}

export const CarrierDetails = ({ data }: CarrierInfoProps) => (
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
)
