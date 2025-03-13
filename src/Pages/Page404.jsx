import { useRouteError } from "react-router-dom";

const Page404 = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>

        <p className="text-xl mb-4">Sorry, the page you are looking for doesn't exist or has been moved.</p>

        <p className="text-sm text-gray-600 mb-6">
          <i>{error.statusText || error.message}</i>
        </p>

        <p className="text-lg text-gray-700 mb-4">You can return to the homepage or check out some of the popular sections of our site.</p>

        <div className="mt-6">
          <a href="/" className="px-6 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700">
            Go to Homepage
          </a>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500">
            If you believe this is an error, please{" "}
            <a href="mailto:support@honesto.com" className="text-blue-600">
              contact support
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page404;
