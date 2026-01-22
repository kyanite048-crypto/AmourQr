// @ts-check
import { withSentryConfig } from "@sentry/nextjs";
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
if (!process.env.SKIP_ENV_VALIDATION) {
    await import("./src/env/server.mjs");
}

/** @type {import("next").NextConfig} */
const config = {
    i18n: { defaultLocale: "en", locales: ["en"] },
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            { hostname: "ik.imagekit.io", pathname: "/**", protocol: "https" },
            { hostname: "lh3.googleusercontent.com", pathname: "/**", protocol: "https" },
        ],
        unoptimized: true,
    },
    reactStrictMode: true,
    sentry: {
        hideSourceMaps: true,
    },
    swcMinify: true,
};

const sentryWebpackPluginOptions = {
    dryRun: !process.env.VERCEL,
    silent: true,
};

export default withSentryConfig(config, sentryWebpackPluginOptions);
