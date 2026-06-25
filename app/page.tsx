import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { CardOffer } from "@/components/card-offer";

export default async function Home() {
  const client = createClient();
  const offers = await client.getAllByType("offer", {
    orderings: [{ field: "document.last_publication_date", direction: "desc" }],
    limit: 3,
  });

  return (
    <div className="flex flex-col bg-white">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src="/banner.jpg"
          alt="bannière"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="px-8 py-10">
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          Nos dernières opportunités
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <CardOffer key={offer.id} offer={offer} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/jobs-offers"
            className="bg-blue-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Voir toutes les offres
          </Link>
        </div>
      </div>
    </div>
  );
}
