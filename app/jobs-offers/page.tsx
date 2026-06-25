import { createClient } from "@/prismicio";
import { CardOffer } from "@/components/card-offer";

export default async function JobsOffers() {
  const client = createClient();
  const offers = await client.getAllByType("offer");

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="mb-4 text-2xl font-bold text-gray-900">
        Offres d&apos;emploi
      </h1>
      <hr className="mb-8 border-black" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <CardOffer key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
}
