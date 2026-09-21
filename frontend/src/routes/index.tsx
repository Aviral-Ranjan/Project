import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/")({ head: head("Home", "Responsible e-waste collection and recycling made simple."), component: LandingPage });

