import { cn } from "@/shared/lib/css"

export const TicketDigits = ({ digits }: { digits: string }) => {
	return (
		<>
			{[...Array(6)].map((_, index) => (
				<div
					key={index}
					className={cn(
						"shadow-xs flex w-full h-[64px] flex-row items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5",
						digits[index] ? "border-blue-300" : "border"
					)}
				>
					{digits[index] || ""}
					{/* Достаем из массива digits по индексу index - 1, если там нет значения, показываем пустую строку */}
				</div>
			))}
		</>
	)
}
