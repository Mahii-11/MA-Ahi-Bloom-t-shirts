function Footer() {
  const currentYear = new Date().getFullYear();
  const companyName = "MAA Ahi BlooM";
  return (
    <div className="fixed bottom-0 right-0 left-0 flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 md:p-3 bg-stone-200 text-gray-900 shadow-md z-10 ">
      <p className="flex space-x-4  font-semibold">
        <span>Ahi Bloom</span>
      </p>
      <p className="text-sm">
        &copy; {currentYear} {companyName}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
