"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Login from "./Login";
import AppModal from "@/UI/AppModal";

const SignInAndSignUp = ({ setIsModalOpen }) => {
  const isMobileScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <AppModal
        customClasses="w-[30rem] bg-white rounded-md"
        title="Welcome, please sign in"
        setIsModalOpen={setIsModalOpen}
        drawerModal={isMobileScreen}
        isScrollable
        options={{
          yAxisPosition: "start",
        }}
      >
        <div className="flex items-center justify-center bg-gradient-to-b p-2">
          <div className="w-full max-w-md rounded-2xl overflow-hidden transition-all duration-300 ease-in-out">
            <div className="p-2">
              <div className="rounded-lg p-2">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </AppModal>
    </div>
  );
};

export default SignInAndSignUp;
