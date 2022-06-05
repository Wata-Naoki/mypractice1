import icon from "./image/image01.jpg";

export default function App() {
  return (
    <>
      <div class=" flex justify-between p-4 items-center text-white  bg-indigo-700 ">
        <div class="flex items-center ">
          <img
            src={icon}
            alt="写真"
            class="w-12 h-12 object-cover rounded-full mr-7"
          />

          <div class="mr-5 ">Solutions</div>
          <div class="mr-5 ">Pricing</div>
          <div class="mr-5 ">Docs</div>
          <div class="mr-5 ">Company</div>
        </div>

        <div>
          <button class="  bg-indigo-500 text-white  py-1 px-3 focus:outline-none  rounded  mr-4">
            Sign in
          </button>
          <button class="  bg-white text-blue-600  py-1 px-3 focus:outline-none  rounded  mr-4">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
