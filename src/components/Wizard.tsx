import OptionBox from './OptionBox';
import QuestionBox from './QuestionBox';
import WizardHeader from './WizardHeader';

const Wizard = () => {
  return (
    <div className="h-screen p-5 bg-slate-100">
      <WizardHeader></WizardHeader>
      <QuestionBox></QuestionBox>
      <OptionBox></OptionBox>
    </div>
  );
};

export default Wizard;
