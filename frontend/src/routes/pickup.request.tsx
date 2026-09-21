import { createFileRoute } from "@tanstack/react-router";
import { RequestPickupPage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/pickup/request")({ head: head("Request Pickup", "Schedule an e-waste pickup with a verified centre."), component: RequestPickupPage });

