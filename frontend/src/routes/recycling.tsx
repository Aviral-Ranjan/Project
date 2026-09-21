import { createFileRoute } from "@tanstack/react-router";
import { CitizenGenericPage, head } from "@/components/ecocycle/pages";
export const Route=createFileRoute("/recycling")({head:head("Recycling History","Review your verified recycling records."),component:Page});
function Page(){return <CitizenGenericPage kind="/recycling"/>}
