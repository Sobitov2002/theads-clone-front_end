import Sidebar from "@/components/root/sidebar";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-[1440px]">

        <Sidebar lng={lng} />

        <main className="min-w-0 flex-1">
          <div className="mx-auto w-full max-w-[680px]">
            {children}
          </div>
        </main>


        <aside className="hidden w-[320px] shrink-0 lg:block">
          {/* Keyin right sidebar / suggestions shu yerga */}
        </aside>

      </div>
    </div>
  );
}