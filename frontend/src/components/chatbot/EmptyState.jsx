import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const suggestions = [
  {
    icon: BriefcaseBusiness,
    title: "Professional experience",
    question: "Tell me about Piyush's professional experience",
  },
  {
    icon: Code2,
    title: "Technical skills",
    question: "What are Piyush's strongest technical skills?",
  },
  {
    icon: Sparkles,
    title: "Projects",
    question: "What projects has Piyush built?",
  },
  {
    icon: GraduationCap,
    title: "Education",
    question: "Tell me about Piyush's education",
  },
];

function EmptyState({ onSelectQuestion }) {
  return (
    <div className="flex w-full flex-col items-center px-4">

      {/* Hero icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
        <Sparkles size={25} strokeWidth={2} />
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        How can I help?
      </h2>

      {/* Subtitle */}
      <p className="mt-3 max-w-md text-center text-sm leading-6 text-slate-500 sm:text-base">
        Ask me anything about Piyush's experience,
        skills, projects, or professional background.
      </p>

      {/* Suggestions */}
      <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">

        {suggestions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => onSelectQuestion(item.question)}
              className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        text-left
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-blue-200
        hover:shadow-md
        focus:outline-none
        focus:ring-2
        focus:ring-blue-100
    "
            >

              <div className="flex items-start gap-3">

                <div className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-slate-100
                                    text-slate-600
                                    transition-colors
                                    group-hover:bg-blue-50
                                    group-hover:text-blue-600
                                ">
                  <Icon size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {item.question}
                  </p>
                </div>

              </div>

            </button>
          );
        })}

      </div>

    </div>
  );
}

export default EmptyState;