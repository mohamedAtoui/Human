import { setRequestLocale, getTranslations } from "next-intl/server";
import { AtlasWorkspace } from "@/components/anatomy/AtlasWorkspace";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("atlas") };
}

export default async function AtlasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AtlasWorkspace />;
}
