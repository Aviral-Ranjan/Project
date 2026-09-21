import { createFileRoute } from "@tanstack/react-router";
import { AuthPage, head } from "@/components/ecocycle/pages";
export const Route = createFileRoute("/login")({ head: head("Log in", "Access your EcoCycle account."), component: LoginRoute });
function LoginRoute(){return <AuthPage/>}
