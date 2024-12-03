import { ChangeEvent } from 'react';

type OptionProps = {
  checked: boolean;
  onChange: (event: ChangeEvent) => void;
  option: Record<string, string>;
};

function Option(props: OptionProps) {
  const { checked, onChange, option } = props;
  return (
    <div
      key={option.id}
      className="flex bg-green-400 overflow-clip justify-stretch basis-full rounded-3xl "
    >
      {/* Card - Inside */}
      <div className="flex justify-center w-full bg-purple-700 ">
        <div className="flex flex-col justify-center w-2/3 p-4 bg-pink-400 ">
          <span className="text-lg font-semibold tracking-tight ">
            {option.label}
          </span>
          <span className="text-sm italic leading-4 text-balance ">
            {option.sublabel}
          </span>
        </div>
        <label className="flex flex-col items-center justify-center w-1/3 bg-slate-400">
          <input
            // className="appearance-none"
            type="checkbox"
            id={option.id}
            checked={checked}
            // checked={selectedId === option.id}
            // onChange={(event) =>
            //   setSelectedId(selectedId === option.id ? '' : event.target.id)
            // }
            onChange={onChange}
          />

          <span>CNET</span>
        </label>
      </div>
    </div>
  );
}

export default Option;
