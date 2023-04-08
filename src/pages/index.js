import { SliceZone } from "@prismicio/react";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import Navbar from "@/components/navbar/Navbar";

export default function Home({ page, navigation }) {
  return (
    <>
      <Navbar data={navigation.data} />
      <main>
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    </>
  );
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });

  const [navigation, page] = await Promise.all([
    client.getByUID("navigation", "navbar"),
    client.getByUID("page", "homepage", { lang: locale }),
  ]);

  return {
    props: {
      navigation,
      page,
    },
  };
}
