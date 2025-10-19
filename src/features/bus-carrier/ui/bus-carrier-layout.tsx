import { ReceiptText } from "lucide-react"

interface BusCarrierLayoutProps {
	title: string
	quantity: React.ReactNode
	info: React.ReactNode
}

export const BusCarrierLayout = ({
	title,
	quantity,
	info,
}: BusCarrierLayoutProps) => {
	return (
		<div className="min-h-screen bg-[#2a2a2a] text-white p-6">
			<div className="max-w-2xl mx-auto flex flex-col gap-4">
				<div className="flex flex-row items-center gap-3 justify-center">
					<ReceiptText className="w-8 h-8" />
					<h1 className="text-2xl font-semibold">{title}</h1>
				</div>
				<div className="flex flex-col">
					{quantity}

					{info}
				</div>
			</div>
		</div>
	)
}
