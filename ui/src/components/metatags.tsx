import { Helmet } from "react-helmet-async";

export default function MetaTags() {
  return (
    <Helmet>
      {/* Basic Meta Tags*/}
      <title>
        Uniswap V4 Hook Miner Tool | Fast, Multithread Vanity Address Miner for
        Uniswap V4 Hooks
      </title>
      <meta
        name="description"
        content="Mine Uniswap V4 hook addresses with our fast, easy-to-use, multithreaded vanity miner tool."
      />
      <meta
        name="keywords"
        content="Uniswap V4, Hook Miner, DeFi Tools, Address Mining"
      />
      <meta name="author" content="Gianfranco Bazzani" />

      {/* OpenGraph for Facebook, LinkedIn, etc. */}
      <meta property="og:title" content="Uniswap V4 Hook Miner Tool" />
      <meta
        property="og:description"
        content="Mine Uniswap V4 hook addresses with our fast, easy-to-use, multithreaded vanity miner tool."
      />
      <meta
        property="og:image"
        content="https://v4hookaddressminer.xyz/metatag.png"
      />
      <meta property="og:url" content="https://v4hookaddressminer.xyz/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Uniswap V4 Hook Miner Tool" />
      <meta
        name="twitter:description"
        content="Mine Uniswap V4 hook addresses with our fast, easy-to-use, multithreaded vanity miner tool."
      />
      <meta
        name="twitter:image"
        content="https://v4hookaddressminer.xyz/metatag.png"
      />
      <meta name="twitter:site" content="@bazzibazzani" />
      <meta name="twitter:creator" content="@bazzibazzani" />

      {/* Additional Meta Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Uniswap Hook Miner Tool" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://v4hookaddressminer.xyz/" />
    </Helmet>
  );
}
