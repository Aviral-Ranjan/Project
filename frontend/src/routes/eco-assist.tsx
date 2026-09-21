import { createFileRoute } from "@tanstack/react-router";
import { EcoAssistPage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/eco-assist")({ head: head("EcoAssist", "Get AI-powered responsible disposal guidance."), component: EcoAssistPage });

