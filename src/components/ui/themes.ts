import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
      tokens: {
        colors: {
          brand: {
            100: { value: "#f4f4f5" },
            200: { value: "#e4e4e7" },
            300: { value: "#d4d4d8" },
            500: { value: "#71717a" },
            700: { value: "#71717a" },
          },
        },
      },
      semanticTokens: {
        colors: {
          brand: {
            solid: { value: "{colors.brand.500}" },
            contrast: { value: "{colors.brand.100}" },
            fg: { value: "{colors.brand.700}" },
            muted: { value: "{colors.brand.100}" },
            subtle: { value: "{colors.brand.200}" },
            emphasized: { value: "{colors.brand.300}" },
            focusRing: { value: "{colors.brand.500}" },
          },
        },
      },
    },
  })
  
  export const system = createSystem(defaultConfig, config)