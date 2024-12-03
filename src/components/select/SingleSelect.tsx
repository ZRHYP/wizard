import { useState } from 'react';
import Option from './Option';
function SingleSelect() {
  const [selectedId, setSelectedId] = useState('');

  return (
    <>
      <div className="flex flex-wrap gap-4 bg-yellow-400">
        <h1>SelectionCard</h1>
        {options.map((option) => (
          // Card Start
          <Option
            checked={selectedId === option.id}
            key={option.id}
            onChange={(event) =>
              setSelectedId(selectedId === option.id ? '' : event.target?.id)
            }
            option={option}
          />
          // Card End
        ))}
      </div>
    </>
  );
}

export default SingleSelect;

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
