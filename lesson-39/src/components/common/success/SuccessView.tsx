type Props = {
  goBack?: () => void;
  goHome?: () => void;
};

export const SuccessView = ({}: Props) => {
  return (
    <div className="w-full flex flex-col pt-8">
 
      <div className="flex flex-col ml-[300px] mt-4 px-4">
        <button className="text-sm text-gray-600 hover:underline mb-1 self-start" type="button" onClick={() => {}}>
          Back to home
        </button>
        <label className="font-bold text-4xl text-black mb-6">Success</label>
      </div>

      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[550px] bg-white shadow-md rounded-2xl p-8 border border-gray-200 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-600 self-start">Email confirmed</p>
            <p className="text-sm text-gray-600 self-start">
              Your registration is now completed
            </p>
          </div>

          <button className="mt-4 w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition" type="button">
            Go to home
          </button>
        </div>
      </div>
    </div>
  );
};
