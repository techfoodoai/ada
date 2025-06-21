import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Contact Ada ",
  description: "Contact Ada",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
  keywords: "Contact Ada",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
