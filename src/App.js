import { useState } from 'react';
import { DrawingCanvas } from './components/DrawingCanvas';
import { Toolbar } from './components/Toolbar';
import { UserPresence } from './components/UserPresence';
import { useDrawingSync } from './hooks/useDrawingSync';
import { Pencil } from 'lucide-react';

function App() {
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(5);

  const { strokes, addStroke, clearCanvas, activeUsers, userId } = useDrawingSync();

  const handleStrokeComplete = (points) => {
    addStroke(points, color, size);
  };

  const handleClearCanvas = () => {
    if (window.confirm('Are you sure you want to clear the entire canvas? This will affect all users.')) {
      clearCanvas();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Pencil className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Real-Time Drawing</h1>
              <p className="text-sm text-gray-600">Draw together with others in real-time</p>
            </div>
          </div>
        </div>
      </header>

      <Toolbar
        color={color}
        size={size}
        onColorChange={setColor}
        onSizeChange={setSize}
        onClearCanvas={handleClearCanvas}
      />

      <main className="flex-1 p-4">
        <div className="max-w-7xl mx-auto h-full">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 h-[calc(100vh-240px)] overflow-hidden">
            <DrawingCanvas
              color={color}
              size={size}
              onStrokeComplete={handleStrokeComplete}
              externalStrokes={strokes}
            />
          </div>
        </div>
      </main>

      <UserPresence activeUsers={activeUsers} currentUserId={userId} />
    </div>
  );
}

export default App;

