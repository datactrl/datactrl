export default {
  PORT                          : process.env.PORT || 3000,
  SWG_STATS_ROUTE               : process.env.SWG_STATS_ROUTE || "/swagger-stats",
  SWG_STATS_SESSION_MAX_AGE     : process.env.SWG_STATS_SESSION_MAX_AGE || 900,
  SWG_STATS_ATHENTICATION       : process.env.SWG_STATS_ATHENTICATION || true,
  SWG_STATS_AUTH_USERNAME       : process.env.SWG_STATS_AUTH_USERNAME || "admin",
  SWG_STATS_AUTH_PASSWORD       : process.env.SWG_STATS_AUTH_PASSWORD || "admin",
  AUTH_SECRET                   : process.env.AUTH_SECRET || "secret",
  AUTH_SALT_ROUND               : process.env.AUTH_SALT_ROUND || 8,
  AUTH_EXPIRE_IN                : process.env.AUTH_EXPIRE_IN || "24h",
  MONGODB_URL                   : process.env.MONGODB_URL || "mongodb://localhost/test",
  MONGODB_AUTH_USERNAME         : process.env.MONGODB_AUTH_USERNAME || "admin",
  MONGODB_AUTH_PASSWORD         : process.env.MONGODB_AUTH_PASSWORD || "admin",
};
