import { createFileRoute } from "@tanstack/react-router";
import { CentreWorkspace, head } from "@/components/ecocycle/pages";
export const Route=createFileRoute("/centre/transfers")({head:head("Recycling Transfers","Manage EcoCycle centre operations."),component:Page});
function Page(){return <CentreWorkspace page="transfers"/>}
