import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function authGuard(requiredRole = null) {
  const session = await auth();

  if (!session) redirect("/login");

  /* if (requiredRole && session.user.role !== requiredRole) {
    redirect("/unauthorized");
  } */

  return session;
}