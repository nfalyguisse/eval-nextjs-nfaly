"use client";

import { PrismicRichText, SliceZone } from "@prismicio/react";
import type { OfferDocument } from "@/prismicio-types";
import Link from "next/link";
import { useFavorisStore } from "@/store/favoris";
import SectionTxt from "@/slices/SectionTxt";
import { CalendarDays } from "lucide-react";

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

export function CardOffer({ offer }: { offer: OfferDocument }) {
  const { label, published_at, description } = offer.data;
  const { addFavori, removeFavori, isFavori } = useFavorisStore();
  const saved = isFavori(offer);

  function handleToggle(e: React.MouseEvent) {
    e.preventDefault();
    if (saved) {
      removeFavori(offer);
    } else {
      addFavori(offer);
    }
  }

  return (
    <Link
      className="flex flex-col gap-3 border border-black p-5 text-black"
      href={`/jobs-offers/${offer.uid}`}
    >
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-[#0F1941] text-lg font-bold">{label}</h2>
        <button
          type="button"
          onClick={handleToggle}
          className={`p-2 ${saved ? "bg-black text-white" : "bg-gray-200"}`}
        >
          {saved ? "Sauvegardé" : "Sauvegarder"}
        </button>
      </div>

      {published_at && (
        <p className="flex items-center text-xs font-medium">
          <span className="flex items-center gap-1.5">
            {" "}
            <CalendarDays size={16} /> Publié le :
          </span>
          {formatDate(published_at)}
        </p>
      )}

      <div className="text-black">
        <PrismicRichText field={description} />
      </div>
    </Link>
  );
}
