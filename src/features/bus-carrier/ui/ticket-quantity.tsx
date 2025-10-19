import { Slider } from "@/shared/ui/kit"

interface TicketQuantityProps {
	title: string
	count: number
	value: number[]
	onValueChange: (value: number[]) => void
}

const DIGITS = [1, 2, 3, 4, 5]

export const TicketQuantity = ({
	title,
	count,
	value,
	onValueChange,
}: TicketQuantityProps) => {
	return (
		<div className="flex flex-col items-start w-full py-6 border-b border-muted-foreground/30">
			<h2 className="ml-11 text-md text-muted-foreground">{title}</h2>

			<div className="flex gap-3 flex-row w-full h-12 items-center">
				<div className="flex items-center justify-center w-8 h-8 border-2 border-white rounded-lg flex-shrink-0">
					<span className="text-md font-semibold">{count}</span>
				</div>
				<div className="flex-1 w-full max-w-sm mt-6">
					<Slider
						value={value}
						onValueChange={onValueChange}
						min={1}
						max={5}
						step={1}
						className="w-full"
					/>
					<div className="mt-2 flex items-center justify-between text-muted-foreground text-xs mx-1.5">
						{DIGITS.map((ticket, index) => (
							<span key={index}>{ticket}</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
