# steps to reproduce

1. Create `.env` file with the `EXPO_PUBLIC_API_ROOT` variable

   - Example: `EXPO_PUBLIC_API_ROOT="https://google.com"`

2. `yarn install`

3. Put an EAS project ID in `app.config.ts`

4. `eas build --platform ios --profile development --local`
   - The profile and the platform don't matter, just an example. The `local` flag is what's important.
5. See failure

- We'll try to access the `EXPO_PUBLIC_API_ROOT` var in `app.config.ts`. If it exists, the building will continue, while if the variable doesn't exist an error will be thrown.
