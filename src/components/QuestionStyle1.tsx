// import gggm_animated from '../assets/gggm_animated.svg';
const QuestionStyle1 = () => {
  const shoot = () => {
    alert('Great Shot!');
  };
  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="flex p-10 bg-slate-300 rounded-2xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut
          delectus aliquid, harum officiis, recusandae non quod hic, et autem
          accusantium neque veniam modi. Esse, quas iure ea ipsa cumque vitae
          explicabo rem architecto nostrum cupiditate autem nisi dolore
          molestias quidem quo maiores fugiat ab! Recusandae illum facere
          aliquid esse earum quos explicabo maxime aspernatur ipsam? A error
          molestiae quidem autem tempore veritatis tenetur, placeat reiciendis
          perferendis nobis incidunt exercitationem magni fuga! Dolore
          consequuntur, est, voluptatum, ea perspiciatis cumque nesciunt soluta
          nisi iste harum beatae eum minus expedita vel. Optio quaerat, aut
          consectetur modi doloribus incidunt rep ellat sequi atque est.
        </p>
      </div>

      {/* OPTIONS*/}
      <div className="flex gap-5 p-10  bg-slate-300 rounded-3xl">
        {/* CARD 1 */}
        <div
          className="relative w-1/2 py-10 overflow-hidden rounded-xl"
          onClick={shoot}
        >
          {/* Image*/}
          <div
            className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1731921954767-8473de81c99e?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
          {/* Inside*/}
          <div className="relative z-10 flex flex-col items-center justify-center gap-y-10">
            {/*
            <img
              src={gggm_animated}
              className="p-10 size-1/2 bg-white/75 rounded-3xl "
              alt=""
            />
            */}
            <div className="px-4 rounded-full bg-orange-600/50 ">
              <span>Lorem ipsum dolor</span>
              <button className="px-6 py-3 bg-white rounded-full">C</button>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="relative w-1/2 py-10 overflow-hidden rounded-3xl">
          {/* Image*/}
          <div
            className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1731921954767-8473de81c99e?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
          {/* Inside*/}
          <div className="relative z-10 flex flex-col items-center justify-center gap-y-10">
            {/*
            <img
              src={gggm_animated}
              className="p-10 size-1/2 bg-white/75 rounded-3xl "
              alt=""
            />
            */}
            <div className="bg-orange-600/50 ">
              <span>Lorem ipsum dolor</span>
              <button className="px-6 py-3 bg-white rounded-full">
                CHOOSE
              </button>
            </div>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="relative w-1/2 py-10 overflow-hidden rounded-3xl">
          {/* Image*/}
          <div
            className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1731921954767-8473de81c99e?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
          {/* Inside*/}
          <div className="relative z-10 flex flex-col items-center justify-center gap-y-10">
            {/*
            <img
              src={gggm_animated}
              className="p-10 size-1/2 bg-white/75 rounded-3xl "
              alt=""
            />
            */}
            <div className="bg-orange-600/50 ">
              <span>Lorem ipsum dolor</span>
              <button className="px-6 py-3 bg-white rounded-full">
                CHOOSE
              </button>
            </div>
          </div>
        </div>
        {/* CARD 4 */}
        <div className="relative w-1/2 py-10 overflow-hidden rounded-3xl">
          {/* Image*/}
          <div
            className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1731921954767-8473de81c99e?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
          {/* Inside*/}
          <div className="relative z-10 flex flex-col items-center justify-center gap-y-10">
            {/*
            <img
              src={gggm_animated}
              className="p-10 size-1/2 bg-white/75 rounded-3xl "
              alt=""
            />
            */}
            <div className="bg-orange-600/50 ">
              <span>Lorem ipsum dolor</span>
              <button className="px-6 py-3 bg-white rounded-full">
                CHOOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionStyle1;
