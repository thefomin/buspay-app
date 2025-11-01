import { formatDate, formatTime } from "@/shared/lib/format-date"
import type { ReceiptResponse } from "@/shared/types/responses.type"
import { InfoRow } from "@/shared/ui"
import { Bus, User, RussianRuble, CalendarDays, Clock } from "lucide-react"

interface ReceiptDetailsProps {
	data: ReceiptResponse
}

export const ReceiptDetails = ({ data }: ReceiptDetailsProps) => {
	return (
		<>
			<InfoRow
				icon={<User className="w-6 h-6" />}
				label="Перевозчик"
				value={data.ticket.carrier}
			/>
			<InfoRow
				icon={<Bus className="w-6 h-6" />}
				label={`${data.ticket.busNumber}, ${data.ticket.route}`}
				value={data.ticket.regNumber}
			/>
			<InfoRow
				icon={<RussianRuble className="w-6 h-6" />}
				label="Стоимость"
				value={`${data.amount / data.ticket.price} шт., ${data.amount.toFixed(
					2
				)} ₽`}
			/>
			<InfoRow
				icon={<CalendarDays className="w-6 h-6" />}
				label="Дата покупки"
				value={formatDate(data.paidAt)}
			/>
			<InfoRow
				icon={<Clock className="w-6 h-6" />}
				label="Время покупки"
				value={formatTime(data.paidAt)}
			/>
		</>
	)
}
