import SectionTxt from "@/slices/SectionTxt";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { redirect } from "next/navigation";

export default async function Mentions() {
  const client = createClient();
  const mentions = await client.getSingle("mentions");

  if (!mentions) redirect("/");
  return (
    <div className="flex flex-col gap-5">
      <div className="py-10">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">
          Mentions légales
        </h1>
        <hr className="mb-8 border-black" />
      </div>

      <SliceZone
        slices={mentions.data.slices}
        components={{
          section_txt: SectionTxt,
        }}
      />
    </div>
  );
}
