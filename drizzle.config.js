/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:OC31ANBKsgyj@ep-shrill-mountain-a5x0xplf.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };