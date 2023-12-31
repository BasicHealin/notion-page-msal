import * as React from "react";
import Head from "next/head";

import { NotionRenderer } from "react-notion-x";
import { getPageTitle } from "notion-utils";

export const NotionPage = ({ recordMap, rootPageId }) => {
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);

  return (
    <>
      <Head>
        <meta name="description" content="React Notion X Minimal Demo" />
        <title>{title}</title>
      </Head>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
      />
    </>
  );
};
