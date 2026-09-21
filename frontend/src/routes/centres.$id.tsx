import { createFileRoute } from "@tanstack/react-router";
import { CentreDetailPage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/centres/$id")({ head: head("Centre Details", "Review accepted items, hours and pickup options."), component: CentreDetailPage });

