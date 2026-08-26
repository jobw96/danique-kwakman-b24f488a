import { Suspense } from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

// Lightweight loading fallback — keeps layout stable while a route chunk loads
const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center" aria-label="Laden">
    <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
  </div>
);

export const Route = createFileRoute("/_layout")({
  component: LayoutRoute,
});

function LayoutRoute() {
  return (
    <Layout>
      <Suspense fallback={<RouteFallback />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}
