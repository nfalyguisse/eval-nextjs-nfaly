import { PrismicRichText } from "@prismicio/react";
import type { OfferDocument } from "@/prismicio-types";
import Link from "next/link";

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

export function CardOffer({ offer }: { offer: OfferDocument }) {
  const { label, published_at, description } = offer.data;

  return (
    <Link
      className="flex flex-col gap-3 border border-black p-5 text-black"
      href={`/jobs-offers/${offer.uid}`}
    >
      <div className="flex items-start justify-between gap-2">
        <h2 className="">{label}</h2>
        <button type="button" className="bg-gray-200 p-2">
          Sauvegarder
        </button>
      </div>

      {published_at && (
        <p className="flex items-center gap-1.5 text-xs font-medium">
          <span>date de publication :</span>
          {formatDate(published_at)}
        </p>
      )}

      <div className="text-black">
        <PrismicRichText field={description} />
      </div>
    </Link>
  );
}
