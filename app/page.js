"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from "app/sections";
import { GoogleAnalytics } from "nextjs-google-analytics";
export default function Page() {
	return (
		<div className="container-md">
			<GoogleAnalytics id={process.env.NEXT_PUBLIC_GA_ID} strategy="lazyOnload" trackPageViews />
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<TechnologiesSection />
		</div>
	);
}
