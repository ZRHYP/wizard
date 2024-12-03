import { useState } from 'react';
import Option from './Option';

function SelectionCard() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  // alles
  const getIsSelected = (option: Record<string, string>) => {
    return Boolean(selectedIds.find((selectedId) => selectedId === option.id));
  };

  console.log(selectedIds);

  return (
    <>
      <div className="flex flex-wrap gap-4 bg-yellow-400">
        <h1>SelectionCard</h1>
        {options.map((option) => (
          // Card Start
          <Option
            checked={getIsSelected(option)}
            onChange={(event) => {
              if (getIsSelected(option)) {
                const selectedIdsWithoutThisOne = selectedIds.filter(
                  (selectedId) => selectedId !== option.id
                );
                setSelectedIds(selectedIdsWithoutThisOne);
                return;
              }
              setSelectedIds([...selectedIds, event.target.id]);
            }}
            option={option}
          />
          // Card End
        ))}
      </div>
    </>
  );
}

export default SelectionCard;

const options = [
  {
    id: 'a',
    label: 'citrus',
    sublabel: 'lemon and tropical fruit flavours',
    logo: 'src/assets/gggm_static.svg',
  },
  {
    id: 'b',
    label: 'berries',
    sublabel: 'fruity taste profiles',
    logo: 'src/assets/gggm_static.svg',
  },
  {
    id: 'c',
    label: 'candy and some more stuff',
    sublabel: 'sweet bubblegum and popsicle flavours',
    logo: 'src/assets/gggm_static.svg',
  },
  {
    id: 'd',
    label: 'cookie & cake',
    sublabel: 'creamy fresh dough smells',
    logo: 'src/assets/gggm_static.svg',
  },
  // { id: 'e', label: 'pine & earthy' },
  // { id: 'f', label: 'gasoline' },
];
