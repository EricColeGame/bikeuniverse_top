import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Bike Universe, Roblox, game logos, screenshots, and related media belong to their respective owners.</p>
      <p>This independent fan wiki presents community-made guides for informational and entertainment purposes. It is not an official game site.</p>
      <p>If you own rights to content displayed here and have a concern, contact <a className="font-semibold text-foreground underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
