import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    nodeVersion: "18",
    ssgName: "custom",
    contentSources: [],
    postInstallCommand: "npm install",
    devCommand: "npm run start",  // Add this line to define the dev server command
});
