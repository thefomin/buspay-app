export interface TicketResponse {
	code: string
	carrier: string
	busNumber: string
	route: string
	regNumber: string
	price: number
}

export interface ReceiptResponse {
	id: string
	ticketId: string
	paidAt: string
	amount: number
	ticket: TicketResponse
}
