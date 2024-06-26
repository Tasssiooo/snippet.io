import type { MetaFunction } from "@remix-run/node";

import Header from "~/components/layout/header";
import HomeView from "~/components/pages/home";
import Footer from "~/components/layout/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Snippet.io | Gist with style!" },
    {
      name: "description",
      content: "Share snippets of your code in an elegant way with Snippet.io!",
    },
  ];
};

export default function Home() {
  return (
    <>
      <Header />
      <HomeView />
      <Footer />
    </>
  );
}
