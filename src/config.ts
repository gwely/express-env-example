import envalid = require("envalid");
const { str, num } = envalid;

export type ConfigType = {
  HOSTNAME: string;
  PORT: number;
  LOG_LEVEL: string;
  MONGO_URL: string;
};

export const config = envalid.cleanEnv<ConfigType>(
  process.env,
  {
    HOSTNAME: str(),
    PORT: num(),
    LOG_LEVEL: str(),
    MONGO_URL: str(),
  },
  { strict: true },
);
