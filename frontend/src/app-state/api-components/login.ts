import { BASE_URL } from "./api-url"

export const login = async (username: string, password: string) => {
    try {
        const result = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
        const data = await result.json()
    } catch (error) {
        alert(error)
    }
}