import { createFileRoute } from "@tanstack/react-router";
import { CitizenGenericPage, head } from "@/components/ecocycle/pages";
export const Route=createFileRoute("/rewards")({head:head("Eco Points","Track points, levels and sustainability achievements."),component:Page});
function Page(){return <CitizenGenericPage kind="/rewards"/>}
