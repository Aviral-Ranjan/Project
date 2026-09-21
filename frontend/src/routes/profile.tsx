import { createFileRoute } from "@tanstack/react-router";
import { CitizenGenericPage, head } from "@/components/ecocycle/pages";
export const Route=createFileRoute("/profile")({head:head("Profile","Manage your EcoCycle profile."),component:Page});
function Page(){return <CitizenGenericPage kind="/profile"/>}
