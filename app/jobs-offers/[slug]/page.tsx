import { createClient } from "@/prismicio";

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

  return (
    <div>
      <h1>Detail JobOffer</h1>
      <h2>{offer.data.label}</h2>
    </div>
  );
}
