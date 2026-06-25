import { OfferDocument } from "@/prismicio-types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavorisState = {
  favoris: OfferDocument[];
  addFavori: (offer: OfferDocument) => void;
  removeFavori: (offer: OfferDocument) => void;
  isFavori: (offer: OfferDocument) => boolean;
};

export const useFavorisStore = create<FavorisState>()(
  persist(
    (set, get) => ({
      favoris: [],
      addFavori: (offer) =>
        set((state) => ({
          favoris: state.favoris.some((f) => f.uid === offer.uid)
            ? state.favoris
            : [...state.favoris, offer],
        })),
      removeFavori: (offer) =>
        set((state) => ({
          favoris: state.favoris.filter((f) => f.uid !== offer.uid),
        })),
      isFavori: (offer) => get().favoris.some((f) => f.uid === offer.uid),
    }),
    {
      name: "favoris-storage",
    },
  ),
);
