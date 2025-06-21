import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "About Ada",
  description: "About Ada",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
  keywords: "about Ada",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
