import Logo from './Logo';

const WizardHeader: React.FC = () => {
  return (
    <>
      <main className="grid grid-flow-col">
        <div className="flex items-center gap-1 bg-slate-300">
          <Logo
            width={44}
            height={44}
            fill={'blue'}
            stroke={''}
            strokeWidth={10}
          />
          <div>/ Spaghetti</div>
        </div>
        <div className="flex gap-1 bg-stone-600">
          <div>Progress Bar</div>
          <button>Exit</button>
        </div>
      </main>
    </>
  );
};

export default WizardHeader;
