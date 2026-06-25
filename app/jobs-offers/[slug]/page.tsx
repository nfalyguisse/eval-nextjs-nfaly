import ContactForm from "@/components/forms/contact-form";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

export async function generateStaticParams() {
  const client = createClient();
  const offers = await client.getAllByType("offer");

  return offers.map((offer) => ({
    slug: offer.uid,
  }));
}

export default async function JobOfferDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const client = createClient();
  const offer = await client.getByUID("offer", slug);
  const { label, published_at, description } = offer.data;

  return (
    <div className="py-10">
      <div className="flex justify-between gap-2">
        <h1 className="text-xl font-bold mb-2">{label}</h1>
        <button type="button" className="bg-gray-200 p-2">
          Sauvegarder
        </button>
      </div>
      {published_at && (
        <p className="flex items-center gap-1.5 text-xs font-medium mb-4">
          <span>Publié le :</span>
          {published_at}
        </p>
      )}

      <div className="text-sm text-gray-700 leading-relaxed [&_p]:mb-4">
        <PrismicRichText field={description} />
      </div>

      <ContactForm emailsAdmin={offer.data.admin.map((admin) => admin.email_admin)} />
    </div>
  );
}
