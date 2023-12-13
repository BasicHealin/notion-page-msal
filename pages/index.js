import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import Head from "next/head";
import styles from "styles/Home.module.css";

import { NotionPage } from "components/NotionPage";
import { rootNotionPageId } from "lib/config";
import notion from "lib/notion";

function SignInButton() {
  // useMsal hook will return the PublicClientApplication instance you provided to MsalProvider
  const { instance } = useMsal();

  return (
    <>
      <div className={styles.intro}>
        <div className={styles.subIntro}>
          <p className={styles.desciption}>
            Welcome to My Notion page , please use your Microsoft
            account to login.
          </p>
          <button
            className={styles.button}
            style={{ height: "40px", alignSelf: "center" }}
            onClick={() => instance.loginRedirect()}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

function SignOutButton() {
  const { instance } = useMsal();

  return (
    <button
      className={styles.buttonSignOut}
      onClick={() => instance.logoutRedirect()}
    >
      Sign Out
    </button>
  );
}

function WelcomeUser() {
  const { accounts } = useMsal();
  const username = accounts[0]?.name;

  return <p>Welcome, {username}</p>;
}

export const getStaticProps = async () => {
  const pageId = rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export default function Home({ recordMap }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Notion</title>
      </Head>
      <AuthenticatedTemplate>
        <div className={styles.header}>
          <WelcomeUser />
          <SignOutButton />
        </div>
        <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <SignInButton />
      </UnauthenticatedTemplate>
    </div>
  );
}
