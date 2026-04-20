import { getTranslations, setRequestLocale } from "next-intl/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("about") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const sections = [
    { title: t("modelsTitle"), body: t("modelsBody") },
    { title: t("techTitle"), body: t("techBody") },
    { title: t("creditsTitle"), body: t("creditsBody") },
    { title: t("disclaimerTitle"), body: t("disclaimerBody") },
  ];

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{t("title")}</h1>
      <p className="mt-4 text-base text-muted-foreground md:text-lg">{t("intro")}</p>
      <div className="mt-8 grid gap-4">
        {sections.map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
