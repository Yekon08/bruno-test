import Slider from "@/components/Slider";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import Navbar from "@/components/navbar/Navbar";
import { SliceZone } from "@prismicio/react";
import Footer from "@/components/Footer";

export default function Home({ page, navigation, footer }) {
  return (
    <>
      <Navbar data={navigation.data} />
      <main>
        <SliceZone slices={page.data.slices} components={components} />
        <Slider />
      </main>
      <Footer data={footer.data} />
    </>
  );
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });

  const [navigation, page, footer] = await Promise.all([
    client.getByUID("navigation", "navbar"),
    client.getByUID("page", "homepage", { lang: locale }),
    client.getByUID("footer", "footer"),
  ]);

  return {
    props: {
      navigation,
      page,
      footer,
    },
  };
}
