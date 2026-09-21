import { createFileRoute } from "@tanstack/react-router";
import { CitizenGenericPage, head } from "@/components/ecocycle/pages";
export const Route=createFileRoute("/awareness/")({head:head("Awareness","Learn responsible e-waste practices."),component:Page});
function Page(){return <CitizenGenericPage kind="/awareness"/>}
