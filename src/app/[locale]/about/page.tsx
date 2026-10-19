import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>Bike Universe Wiki is an independent fan-built guide hub covering bikes, controls, stunts, upgrades, progression routes, and essential game knowledge for new and veteran riders alike.</p>
      <p>Bike Universe is a Roblox biking simulator with freestyle tricks, police chases, bike collecting, and open-world progression. Our guides are built to help players find the right bike, learn the controls, and progress faster.</p>
      <p>This site is not affiliated with Roblox Corporation or the Bike Universe developers. Questions and corrections can be sent to <a className="font-semibold text-foreground underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
