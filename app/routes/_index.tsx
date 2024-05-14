import { redirect } from "@remix-run/react";

export async function loader() {
  return redirect("/home");
}

export default function Index() {
  return <></>;
}
