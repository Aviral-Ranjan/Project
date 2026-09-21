import { createFileRoute } from "@tanstack/react-router";
import { AddWastePage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/e-waste/add")({ head: head("Add E-Waste", "Register electronics for responsible disposal."), component: AddWastePage });

