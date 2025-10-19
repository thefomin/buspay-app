import { Button } from "@/shared/ui/kit"
import { Delete, ScanQrCode } from "lucide-react"

interface DigitsKeyboardProps {
	digitsLength: number
	onDigitClick: (digit: number) => void
	onBackspace: () => void
	onQrScan: () => void
}

export const DigitsKeyboard = ({
	digitsLength,
	onDigitClick,
	onBackspace,
	onQrScan,
}: DigitsKeyboardProps) => {
	return (
		<div className="grid grid-cols-3 gap-2 w-full items-center bg-muted/75 p-2 rounded-lg">
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
				<Button
					key={num}
					onClick={() => onDigitClick(num)}
					disabled={digitsLength >= 6}
					className="h-16 text-2xl font-semibold rounded-mg border-none"
					variant="outline"
				>
					{num}
				</Button>
			))}
			<Button
				onClick={onQrScan}
				disabled={digitsLength >= 6}
				className="h-16 text-2xl font-semibold flex flex-col [&_svg:not([class*='size-'])]:size-7"
				variant="outline"
			>
				<ScanQrCode />
			</Button>
			<Button
				onClick={() => onDigitClick(0)}
				disabled={digitsLength >= 6}
				className="h-16 text-2xl font-semibold"
				variant="outline"
			>
				0
			</Button>
			<Button
				onClick={onBackspace}
				disabled={digitsLength <= 0}
				className="h-16 text-2xl font-semibold [&_svg:not([class*='size-'])]:size-7"
				variant="outline"
			>
				<Delete />
			</Button>
		</div>
	)
}
