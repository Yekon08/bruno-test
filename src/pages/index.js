import { SliceZone } from "@prismicio/react";

import { createClient } from "../../prismicio";
import { components } from "../../slices";

export default function Home({ page }) {
  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "homepage", { lang: locale });

  return {
    props: {
      page,
    },
  };
}
