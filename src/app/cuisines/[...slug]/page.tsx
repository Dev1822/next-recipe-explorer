import CuisinesView from "@/components/CuisinesView";

export function generateStaticParams() {
  return [
    { slug: ["asian"] },
    { slug: ["asian", "east-asian"] },
  ];
}

export default async function CuisinesSlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return <CuisinesView slug={slug} />;
}
