import TagGroup from "@/app/components/TagGroup/TagGroup";

type ToolGroup = {
  title: string;
  items: string[];
};

type Props = {
  title: string;
  groups: ToolGroup[];
};

export default function ToolsList({ title, groups }: Props) {
  return (
    <div className="text-sm md:text-base text-slate-700">
      <p className="text-xs uppercase tracking-[0.35em] text-slate-600">
        {title}
      </p>
      <div className="mt-4 space-y-5">
        {groups.map((group) => (
          <div key={group.title}>
            <p className="text-sm font-semibold text-slate-800">
              {group.title}
            </p>
            <div className="mt-2">
              <TagGroup items={group.items} variant="soft" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
