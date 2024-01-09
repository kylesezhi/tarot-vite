import React from "react";
import { Helmet } from "react-helmet";
import "./ShowCardHeader.css";
import { getCardUrl, getTitle } from "../../utils/helpers";
import { Interpretation, Orientation } from "../../store/types";

interface ShowCardHeaderProps {
  orientation: Orientation;
  number: number;
  interpretation: Interpretation;
}

function ShowCardHeader({
  orientation,
  number,
  interpretation,
}: ShowCardHeaderProps) {
  const title = getTitle(interpretation.name, orientation);
  const imageUrl = `https://tarot-images.netlify.app/${number}.webp`;

  return (
    <>
      <Helmet>
        {/* HTML Meta Tags */}
        <meta
          name="description"
          content={interpretation.description[orientation]}
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={getCardUrl(number, orientation)} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={interpretation.description[orientation]}
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Daily Tarot" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tarot-tarot.netlify.app" />
        <meta
          property="twitter:url"
          content={getCardUrl(number, orientation)}
        />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content={interpretation.description[orientation]}
        />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
    </>
  );
}

export default ShowCardHeader;
