import ColumnSignupPage from "./ColumnSignupPage"

export const metadata = {
  title: "Free Relationship Columns | TTM LOVE AI",
  description:
    "Receive free columns with valuable relationship advice via email. Get practical tips that can help your relationship situation.",
  keywords: "free relationship advice, relationship columns, dating tips, relationship insights",
  alternates: {
    canonical: "/column",
  },
  openGraph: {
    title: "Free Relationship Columns | TTM LOVE AI",
    description:
      "Receive free columns with valuable relationship advice via email. Get practical tips that can help your relationship situation.",
    url: "https://ttmloveai.com/column",
  },
}

export default function Page() {
  return <ColumnSignupPage />
}
