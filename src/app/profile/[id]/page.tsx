export default function UserProfile({ params }: any) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-black">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Profile</h1>
          <hr className="w-24 mx-auto border-t-2 border-orange-500 mb-6" />
          <p className="text-lg text-gray-300 mb-4">Profile page</p>
          <span className="text-3xl p-2 ml-2 rounded bg-orange-500 text-black">
            {params.id}
          </span>
        </div>
      </div>
    );
  }
  

