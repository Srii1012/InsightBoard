import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Sri");
  const [email, setEmail] = useState("sri@example.com");
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    // In a real app: save to backend or context
    alert("Profile updated!");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded p-6">
        <h2 className="text-2xl font-bold mb-4">👤 Profile</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            {editing ? (
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <p className="text-lg">{name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            {editing ? (
              <input
                type="email"
                className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <p className="text-lg">{email}</p>
            )}
          </div>

          <div className="pt-4">
            {editing ? (
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={handleSave}
              >
                💾 Save
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setEditing(true)}
              >
                ✏️ Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
