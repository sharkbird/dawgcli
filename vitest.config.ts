import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: [`./**/*.test.{js,ts}`],
        coverage: {
            reportsDirectory: `./vitest`,
        },
    },
},
);
