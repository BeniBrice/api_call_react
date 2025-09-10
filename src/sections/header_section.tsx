function HeaderSection() {
  return (
    <section className=" bg-blue-300 p-10 w-full">
      <div className="flex justify-between">
        <p className="text-white font-bold text-2xl">Search user</p>
        <div className="flex items-center justify-center gap-2">
          <Paragraph title={"Search"} />
          <Paragraph title={"About"} />
          <Paragraph title={"FAQ"} />
        </div>
      </div>
    </section>
  );
}

interface pProps {
  title: String;
}

function Paragraph({ title }: pProps) {
  return <p className="text-white text-[15px]">{title}</p>;
}

export default HeaderSection;
