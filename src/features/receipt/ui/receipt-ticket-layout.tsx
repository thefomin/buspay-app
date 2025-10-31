import { ReceiptText } from "lucide-react"

interface ReceiptLayoutProps {
	title: React.ReactNode
	receipt: React.ReactNode
}
export const ReceiptTicketLayout = ({ receipt, title }: ReceiptLayoutProps) => {
	return (
		<section className="min-h-screen bg-[#2a2a2a] text-white p-6">
			<div className="max-w-2xl mx-auto flex flex-col gap-4 h-full">
				<div className="flex flex-row items-center gap-3 justify-center">
					<ReceiptText className="w-8 h-8" />
					<h1 className="text-2xl font-semibold">{title}</h1>
				</div>
				<div className="flex flex-col">{receipt}</div>
			</div>
		</section>
	)
}
