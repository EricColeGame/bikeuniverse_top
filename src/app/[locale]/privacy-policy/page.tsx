import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This independent fan wiki provides informational game guides for Bike Universe on Roblox. We do not request Roblox account credentials, passwords, or private payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to Roblox, Reddit, YouTube, or community tools. Those services are governed by their own privacy policies.</p>
      <p>Privacy questions can be sent to <a className="font-semibold text-foreground underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
