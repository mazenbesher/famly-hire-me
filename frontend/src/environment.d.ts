declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ACCESS_TOKEN: string;
      GROUP_ID: string;
      INSTITUTION_ID: string;
    }
  }
}

export { }