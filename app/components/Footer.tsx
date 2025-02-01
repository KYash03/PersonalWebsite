export default function Footer() {
  const lastUpdatedDate = "Jan 31, 2025";
  return (
    <div className="text-center py-2 border-t-2 border-black mt-6 w-full max-w-screen-md mx-auto">
      <p>Last Updated: {lastUpdatedDate}</p>
    </div>
  );
}
