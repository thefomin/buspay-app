import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

//можно сделать универсальный хук для навигации с изменяемым значением
//но маленький проект, пока не нужно)
export function useHandleBack() {
	const navigate = useNavigate()
	return useCallback(() => navigate("/"), [navigate])
}
