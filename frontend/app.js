import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import SkillsDisplay from './components/SkillsDisplay';
import Header from './components/Header';
import './App.css';

function App() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <FileUpload 
            setSkills={setSkills} 
            setLoading={setLoading} 
            setError={setError} 
          />
          
          {loading && (
            <div className="mt-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-2 text-gray-600">Extracting skills from your resume...</p>
            </div>
          )}
          
          {error && (
            <div className="mt-8 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
              <p>{error}</p>
            </div>
          )}
          
          {skills.length > 0 && !loading && (
            <SkillsDisplay skills={skills} />
          )}
        </div>
      </main>
      <footer className="bg-white py-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Resume Skills Extractor</p>
      </footer>
    </div>
  );
}

export default App;