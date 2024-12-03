import SingleSelect from './select/SingleSelect';
import MultiSelect from './select/SingleSelect';

const OptionBox = () => {
  return (
    <div className="h-auto p-2 bg-blue-400 rounded-xl">
      <p>OptionBox</p>
      <SingleSelect />
      <MultiSelect />
    </div>
  );
};

export default OptionBox;
