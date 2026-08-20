const stats = [
  {
    title: "Total Sales",
    value: "119 M",
    icon: "/sales.svg",
  },
  {
    title: "Total Profit",
    value: "15 M",
    icon: "/profit.svg",
  },
  {
    title: "Total Unit Sold",
    value: "1 M",
    icon: "/unit-sold.svg",
  },
  {
    title: "Countries",
    value: "647",
    icon: "/countries.svg",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="flex h-[50px] items-center gap-3 rounded-lg border border-white/5 bg-[#181818] px-3"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#101010]">
            <img
              src={stat.icon}
              alt=""
              className="h-5 w-5"
            />
          </div>

          <div className="flex items-center gap-3">
            <p className="whitespace-nowrap text-[11px] text-gray-300">
              {stat.title}
            </p>

            <p className="whitespace-nowrap text-[25px] font-medium leading-none text-white">
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}