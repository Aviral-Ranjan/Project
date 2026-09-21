import { createFileRoute } from "@tanstack/react-router";
import { TrackPickupPage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/pickups/$id")({ head: head("Track Pickup", "Follow your electronics through their recycling journey."), component: TrackPickupPage });

