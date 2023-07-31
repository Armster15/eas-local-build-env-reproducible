import path from "path";
import dotenv from "dotenv";
import type { ExpoConfig } from "expo/config";

// example of trying to load an env var from .env
// won't work when running `eas build --local`
dotenv.config({ path: path.resolve(__dirname, ".env") });

const API_ROOT = process.env.EXPO_PUBLIC_API_ROOT;
if (!API_ROOT) {
  throw new Error("EXPO_PUBLIC_API_ROOT env var doesn't exist");
}

const config: ExpoConfig = {
  name: "eas-local-build-env-reproducible",
  slug: "eas-local-build-env-reproducible",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.expo-env-bug-reproducible.example",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectID: "<put_project_id_here>",
    },
  },
};

export default config;
