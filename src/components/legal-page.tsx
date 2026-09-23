import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { company, formattedAddress } from "@/lib/company";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-white">
              K
            </div>
            <span className="text-xl font-bold">KUMISOFT</span>
          </Link>
          <Link
            href="/"
            className="flex items-center text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-6 py-16 max-w-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-slate-400 mb-10">
          Last updated: {lastUpdated}
        </p>
        <div className="space-y-6 text-slate-300 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:pt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-orange-400 [&_a:hover]:underline">
          {children}
        </div>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 lg:px-6 text-sm text-slate-400 space-y-1">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <p>{formattedAddress}</p>
        </div>
      </footer>
    </div>
  );
}
