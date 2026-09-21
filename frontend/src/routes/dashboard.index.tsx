import { createFileRoute } from "@tanstack/react-router";
import { CitizenDashboard, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/dashboard/")({ head: head("Dashboard", "Review your pickups and environmental impact."), component: CitizenDashboard });

