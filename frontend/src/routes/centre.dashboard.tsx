import { createFileRoute } from "@tanstack/react-router";
import { CentreWorkspace, head } from "@/components/ecocycle/pages";
export const Route=createFileRoute("/centre/dashboard")({head:head("Centre Dashboard","Manage EcoCycle centre operations."),component:Page});
function Page(){return <CentreWorkspace page="dashboard"/>}
