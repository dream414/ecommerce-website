const LoginForm = ({ onClose }) => {
  return (
    <div className="rounded-2xl max-w-md mx-auto mt-6 p-6 text-white shadow-md bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400">
      <h2 className="text-2xl font-bold mb-6 text-center">🔐 Login to Your Account</h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-white p-3 rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-white p-3 rounded text-black"
        />

        <div className="flex justify-between items-center">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-orange-600" />
            Remember Me
          </label>
          <button type="button" className="text-sm underline">Forgot Password?</button>
        </div>

        <div className="flex gap-3 justify-end">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Login
          </button>
          <button
            onClick={onClose}
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
