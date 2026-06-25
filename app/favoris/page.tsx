"use client";

import { CardOffer } from "@/components/ui/card-offer";
import { useFavorisStore } from "@/store/favoris";

export default function Favoris() {
  const favoris = useFavorisStore((state) => state.favoris);

  return (
    <div>
      <h1>Favoris</h1>
      {favoris.length === 0 ? (
        <p>Aucun favori sauvegardé.</p>
      ) : (
        favoris.map((offer) => <CardOffer key={offer.uid} offer={offer} />)
      )}
    </div>
  );
}
