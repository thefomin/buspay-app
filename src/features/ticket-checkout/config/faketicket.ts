export interface Ticket {
	code: string // уникальный код билета
	carrier: string // перевозчик
	busNumber: string // номер автобуса
	route: string // "Точка A — Точка B"
	regNumber: string // гос. номер транспорта
	price: number // тариф
}

export const fakeTickets: Ticket[] = [
	{
		code: "123456",
		carrier: "ООО Название",
		busNumber: "25",
		route: "Москва — Санкт-Петербург",
		regNumber: "А123ВС77",
		price: 48,
	},
	{
		code: "654321",
		carrier: "ООО Название",
		busNumber: "30",
		route: "Москва — Казань",
		regNumber: "В987КЛ99",
		price: 48,
	},
]
