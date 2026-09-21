import { createFileRoute } from "@tanstack/react-router";
import { AdminWorkspace, head } from "@/components/ecocycle/pages";
export const Route=createFileRoute("/admin/centres")({head:head("Centre Verification","Manage the EcoCycle platform."),component:Page});
function Page(){return <AdminWorkspace page="centres"/>}
