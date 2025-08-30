 import { ThemeProvider } from "@/shared/components/ui/theme-provider"
import type { ReactNode } from "react"

type ProvidersProps = { children: ReactNode }

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
