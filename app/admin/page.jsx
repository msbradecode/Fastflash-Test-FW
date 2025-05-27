
'use client';
import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [endpoints, setEndpoints] = useState([]);
  const [newEndpoint, setNewEndpoint] = useState('');

  useEffect(() => {
    fetch('/api/endpoints')
      .then(res => res.json())
      .then(data => setEndpoints(data));
  }, []);

  const handleAddEndpoint = async () => {
    const res = await fetch('/api/endpoints', {
      method: 'POST',
      body: JSON.stringify({ endpoint: newEndpoint }),
    });
    if (res.ok) {
      const updated = await res.json();
      setEndpoints(updated);
      setNewEndpoint('');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <h2 className="text-xl font-semibold mb-2">Add New Endpoint</h2>
      <input
        value={newEndpoint}
        onChange={(e) => setNewEndpoint(e.target.value)}
        placeholder="/api/new-endpoint"
        className="w-full p-2 border mb-2 rounded"
      />
      <button
        onClick={handleAddEndpoint}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Endpoint
      </button>

      <h2 className="text-xl font-semibold mt-6 mb-2">Current Endpoints</h2>
      <ul className="list-disc pl-5">
        {endpoints.map((ep, i) => (
          <li key={i}>{ep.endpoint} - {ep.key}</li>
        ))}
      </ul>
    </div>
  );
}
