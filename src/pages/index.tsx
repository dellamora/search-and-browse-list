import Head from "next/head";
import Card from "~/components/card";
import Search from "~/components/search";
export default function Home() {
  return (
    <div className="flex flex-col p-8  gap-4">
      <Search/>
      <Card/>
    </div>
  );
}
