import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Activity } from "lucide-react";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-background/85 px-4 backdrop-blur md:px-8">
      <Link href="/" className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Activity className="h-5 w-5" />
        </span>
        <span className="text-base font-semibold tracking-tight">{tSite("name")}</span>
      </Link>
      <nav className="flex items-center gap-1 md:gap-2">
        <Link
          href="/atlas"
          className="rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:px-3"
        >
          {t("atlas")}
        </Link>
        <Link
          href="/about"
          className="rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:px-3"
        >
          {t("about")}
        </Link>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
