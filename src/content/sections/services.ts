import type { ServicesContent } from "../types";
import { images } from "../images";

// TODO(content): the service list is not owner-confirmed yet (discovery Q1). Copy is placeholder.
export const services: ServicesContent = {
  eyebrow: "What we build with AI",
  title: "Software for every need, accelerated by AI",
  intro:
    "From a first prototype to production systems, we pair experienced engineers with modern AI tooling to deliver faster, without cutting corners.",
  statusTag: "Placeholder: services to be confirmed",
  items: [
    {
      id: "web-mobile",
      icon: "code",
      title: "Web and mobile apps",
      summary:
        "Fast, accessible web platforms and mobile apps with AI features built in from day one, such as smart search, recommendations and content generation.",
      tags: ["Web", "iOS and Android", "AI features"],
      image: images.serviceWebMobile,
    },
    {
      id: "ai-assistants",
      icon: "chat",
      title: "AI assistants and chatbots",
      summary:
        "Assistants that answer questions, guide customers and support your team, grounded in your own documents and data.",
      tags: ["Customer support", "Internal knowledge", "LLMs"],
      image: images.serviceAiAssistants,
    },
    {
      id: "automation",
      icon: "workflow",
      title: "Intelligent automation",
      summary:
        "Remove repetitive work by connecting your tools and letting AI handle documents, triage and routine decisions, with people in the loop where it matters.",
      tags: ["Workflows", "Document processing", "Agents"],
      image: images.serviceAutomation,
    },
    {
      id: "data-analytics",
      icon: "target",
      title: "Data and analytics",
      summary:
        "Turn scattered data into dashboards, forecasts and insights your team can act on, with models that explain what they see.",
      tags: ["Dashboards", "Forecasting", "Machine learning"],
      image: images.serviceDataAnalytics,
    },
    {
      id: "cloud-integration",
      icon: "layers",
      title: "Cloud and integration",
      summary:
        "Modern cloud architecture and reliable integrations between the systems you already use, ready to scale with AI workloads.",
      tags: ["Cloud", "APIs", "Integration"],
      image: images.serviceCloudIntegration,
    },
    {
      id: "custom-software",
      icon: "rocket",
      title: "Custom software",
      summary:
        "Bespoke systems for the problems off-the-shelf tools do not solve, designed around how your organisation actually works.",
      tags: ["Bespoke platforms", "Modernisation", "MVPs"],
      image: images.serviceCustomSoftware,
    },
  ],
};
