import * as msal from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "CLIENT_ID_HERE",
    authority: `https://login.microsoftonline.com/HereEnter_the_Tenant_Info_Here`,

    redirectUri: "http://localhost:3000",
  },
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

export { msalInstance };
