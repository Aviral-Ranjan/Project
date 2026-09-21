import { createFileRoute } from "@tanstack/react-router";
import { PickupsPage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/pickups/")({ head: head("My Pickups", "Manage your e-waste collection requests."), component: PickupsPage });

