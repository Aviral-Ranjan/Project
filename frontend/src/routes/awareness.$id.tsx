import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/awareness/$id")({ head: head("E-Waste Guide", "Learn how responsible electronics recycling works."), component: ArticlePage });

