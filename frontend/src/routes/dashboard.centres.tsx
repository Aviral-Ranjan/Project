import { createFileRoute } from "@tanstack/react-router";
import { CentresPage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/dashboard/centres")({ head: head("Nearby Centres", "Find verified e-waste centres near you."), component: AuthCentres });
function AuthCentres(){return <CentresPage authenticated/>}
