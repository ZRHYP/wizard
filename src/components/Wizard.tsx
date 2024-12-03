import OptionBox from './OptionBox';
import QuestionBox from './QuestionBox';

const Wizard = () => {
  return (
    <div className="h-screen p-5 bg-slate-100">
      <QuestionBox></QuestionBox>
      <OptionBox></OptionBox>
    </div>
  );
};

export default Wizard;
