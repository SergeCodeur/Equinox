import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <section className="flex-1 overflow-y-scroll h-full">{children}</section>
    </div>
  );
}
