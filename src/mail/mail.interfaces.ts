/* eslint-disable prettier/prettier */
export interface MailModuleOptions {
  apiKeys: string;
  domain: string;
  fromEmail: string;
}

export interface EmailVar {
  key: string;
  value: string;
}
