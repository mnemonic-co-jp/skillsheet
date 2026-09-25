import type { Metadata } from "next";
import { IBM_Plex_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const display = Shippori_Mincho({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "小林宗明 スキルシート | Somin Kobayashi",
  description:
    "株式会社ニーモニック代表・小林宗明のフロントエンド / バックエンド開発スキルシート。Angular、Python、Google App Engine を中心とした実務経験をまとめています。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
