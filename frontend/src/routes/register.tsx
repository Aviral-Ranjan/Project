import { createFileRoute } from "@tanstack/react-router";
import { AuthPage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/register")({ head: head("Create account", "Join EcoCycle and start recycling responsibly."), component: RegisterRoute });
function RegisterRoute(){return <AuthPage register/>}
