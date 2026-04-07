'use client';

interface StatCardProps {
  percentage: string;
  label: string;
}

export default function StatCard({ percentage, label }: StatCardProps) {
  return (
    <div className="border border-border rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:border-accent/40 hover:bg-secondary transition-all duration-300 group">
      <div className="text-5xl font-bold text-accent font-display mb-3 group-hover:scale-105 transition-transform">{percentage}</div>
      <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}
