import { useEffect, useRef } from "react"

export function useFocusShortcut<T extends HTMLElement>(shortcutKey: string) {
    const ref = useRef<T>(null)

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === shortcutKey) {
                event.preventDefault()
                ref.current?.focus()
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [shortcutKey])

    return ref
}
