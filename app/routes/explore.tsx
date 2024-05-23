import Header from "~/components/layout/header";
import ExploreView from "~/components/pages/explore";
import Footer from "~/components/layout/footer";

import { Outlet } from "@remix-run/react";

export default function ExploreLayout() {
  return (
    <>
      <Header />
      <ExploreView children={<Outlet />} />
      <Footer />
    </>
  );
}
