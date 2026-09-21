import { createFileRoute } from "@tanstack/react-router";
import { WasteListPage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/e-waste/")({ head: head("My E-Waste", "Manage electronics registered for recycling."), component: WasteListPage });

