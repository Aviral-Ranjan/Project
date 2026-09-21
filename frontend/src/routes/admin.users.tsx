import { createFileRoute } from "@tanstack/react-router";
import { AdminWorkspace, head } from "@/components/ecocycle/pages";
export const Route=createFileRoute("/admin/users")({head:head("User Management","Manage the EcoCycle platform."),component:Page});
function Page(){return <AdminWorkspace page="users"/>}
