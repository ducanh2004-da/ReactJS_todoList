import React, { useState, useEffect } from 'react'
import { gql } from '@apollo/client';
import { client } from '../graphql/client.js'; // adjust path if needed
import './App.css'
import Task from './Task/Task.jsx';
import Tag from './Tag/Tag.jsx';
import Report from './Report/Report.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('task');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center">
      <header className="w-full py-6 bg-white shadow-md mb-8 flex flex-col items-center rounded-b-2xl">
        <h1 className="text-4xl font-bold text-indigo-700 mb-2 tracking-tight">Todo List App</h1>
        <nav className="flex gap-4">
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-sm border ${activeTab === 'task' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 hover:bg-indigo-100'}`}
            onClick={() => setActiveTab('task')}
          >
            Task
          </button>
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-sm border ${activeTab === 'tag' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 hover:bg-indigo-100'}`}
            onClick={() => setActiveTab('tag')}
          >
            Tag
          </button>
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-sm border ${activeTab === 'report' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 hover:bg-indigo-100'}`}
            onClick={() => setActiveTab('report')}
          >
            Report
          </button>
        </nav>
      </header>
      <main className="w-full max-w-5xl px-4 flex-1">
        {activeTab === 'task' && <Task />}
        {activeTab === 'tag' && <Tag />}
        {activeTab === 'report' && <Report />}
      </main>
      <footer className="w-full py-4 text-center text-gray-400 text-sm mt-8">
        &copy; {new Date().getFullYear()} Todo List App. All rights reserved.
      </footer>
    </div>
  );
}

export default App