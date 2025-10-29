import { DigitsKeyboard, TicketDigits, TicketInputLayout } from "./ui"
import { useTicketInput } from "./hooks/use-ticket-input"

const TicketInputPage = () => {
	const { digits, handleDigitClick, handleBackspace, handleQrScan } =
		useTicketInput()

	return (
		<TicketInputLayout
			digits={<TicketDigits digits={digits} />}
			keyboard={
				<DigitsKeyboard
					digitsLength={digits.length}
					onDigitClick={handleDigitClick}
					onBackspace={handleBackspace}
					onQrScan={handleQrScan}
				/>
			}
		/>
	)
}

export const Component = TicketInputPage
