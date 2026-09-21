import { createFileRoute } from "@tanstack/react-router";
import { CitizenGenericPage, head } from "@/components/ecocycle/pages";
export const Route=createFileRoute("/settings")({head:head("Settings","Manage notifications, privacy and preferences."),component:Page});
function Page(){return <CitizenGenericPage kind="/settings"/>}
