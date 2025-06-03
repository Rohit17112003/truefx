import Link from "next/link";

const BannerButton = ({ label, route }) => {
  return (
    <div className="bg-primary flex w-full items-center gap-6 rounded-2xl p-5 text-white">
      <Link href={route}>
        <i className="ri-arrow-left-line ri-lg"></i>
      </Link>
      <span className="text-xl font-semibold">{label}</span>
    </div>
  );
};

export default BannerButton;
