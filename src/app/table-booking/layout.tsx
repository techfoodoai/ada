import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Table Booking Ada",
  description: "Table Booking Ada",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
  keywords: "Table Booking Ada",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
