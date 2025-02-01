interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <div className={`border-l-2 border-gray-200 pl-4 mb-4 ${className}`}>
      {children}
    </div>
  );
}
