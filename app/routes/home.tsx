import type { MetaFunction } from "@remix-run/node";

import Header from "~/components/layout/header";

export const meta: MetaFunction = () => {
  return [
    { title: "Snippet.io | Gist with style!" },
    { name: "description", content: "Share snippets of your code in an elegant way with Snippet.io!" },
  ];
};

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}
