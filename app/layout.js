import "../public/styles.css";

export const metadata = {
  title: "Verity — Digital experiences",
  description: "Verity — premium websites and digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
