import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Layers, MousePointerClick, Smartphone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tSite = await getTranslations("site");

  const features = [
    { icon: Sparkles, title: t("featureSystemsTitle"), body: t("featureSystemsBody") },
    { icon: MousePointerClick, title: t("featureInteractiveTitle"), body: t("featureInteractiveBody") },
    { icon: Layers, title: t("featureLayerTitle"), body: t("featureLayerBody") },
    { icon: Smartphone, title: t("featureMobileTitle"), body: t("featureMobileBody") },
  ];

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.12),_transparent_60%)]" />
        <div className="container mx-auto flex flex-col items-start gap-8 px-4 py-16 md:py-24 lg:flex-row lg:items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t("heroEyebrow")}
            </div>
            <h1 className="mt-4 whitespace-pre-line text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              {t("heroSubtitle")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/atlas" className={cn(buttonVariants({ size: "lg" }))}>
                {t("cta")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>
          <div className="relative w-full flex-1 lg:max-w-xl">
            <div className="aspect-square w-full overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/10 via-background to-secondary shadow-xl">
              <div className="flex h-full w-full items-center justify-center p-10">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/30">
        <div className="container mx-auto grid gap-5 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="animate-fade-in">
              <CardContent className="p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-base font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>{t("footer", { year: new Date().getFullYear() })}</span>
          <span>{tSite("name")}</span>
        </div>
      </footer>
    </div>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 200 260" className="h-full w-full text-primary">
      <defs>
        <linearGradient id="bodyg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <g fill="url(#bodyg)" stroke="currentColor" strokeWidth="1.4">
        <ellipse cx="100" cy="30" rx="22" ry="26" />
        <rect x="82" y="52" width="36" height="14" rx="5" />
        <path d="M55 80 Q100 60 145 80 L150 150 Q100 165 50 150 Z" />
        <rect x="82" y="150" width="36" height="30" rx="5" />
        <rect x="74" y="178" width="20" height="70" rx="8" />
        <rect x="106" y="178" width="20" height="70" rx="8" />
        <rect x="35" y="85" width="18" height="60" rx="8" />
        <rect x="147" y="85" width="18" height="60" rx="8" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.55">
        <circle cx="100" cy="110" r="10" />
        <circle cx="80" cy="108" r="12" />
        <circle cx="120" cy="108" r="12" />
      </g>
    </svg>
  );
}
