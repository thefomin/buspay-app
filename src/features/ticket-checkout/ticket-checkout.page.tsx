import { DigitsKeyboard, TicketDigits, TicketCheckoutLayout } from "./ui"
import { useTicketCheckout } from "./hooks/use-ticket-checkout"

const TicketCheckoutPage = () => {
	const { digits, handleDigitClick, handleBackspace, handleQrScan } =
		useTicketCheckout()

	return (
		<TicketCheckoutLayout
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

export const Component = TicketCheckoutPage
