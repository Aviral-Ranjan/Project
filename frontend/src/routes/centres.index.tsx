import { createFileRoute } from "@tanstack/react-router";
import { CentresPage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/centres/")({ head: head("Find Centres", "Discover verified e-waste collection centres near you."), component: CentresPage });

