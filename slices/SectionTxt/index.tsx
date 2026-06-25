import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SectionTxt`.
 */
export type SectionTxtProps = SliceComponentProps<Content.SectionTxtSlice>;

/**
 * Component for "SectionTxt" Slices.
 */
const SectionTxt: FC<SectionTxtProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mb-8"
    >
      {slice.primary.title && (
        <h2 className="mb-3 text-xl font-semibold text-gray-800">
          {slice.primary.title}
        </h2>
      )}
      <div className="prose max-w-none text-gray-700">
        <PrismicRichText field={slice.primary.paragraph} />
      </div>
    </section>
  );
};

export default SectionTxt;
